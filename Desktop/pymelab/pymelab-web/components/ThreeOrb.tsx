'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ── Rotating icosahedra (wireframe) ── */
function Icosahedra() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.18
      outerRef.current.rotation.x = t * 0.07
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.13
      innerRef.current.rotation.x = t * 0.11
    }
  })

  return (
    <group>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.85, 1]} />
        <meshBasicMaterial color="#C8A96E" wireframe transparent opacity={0.65} />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#E2C99A" wireframe transparent opacity={0.25} />
      </mesh>
    </group>
  )
}

/* ── Floating particle cloud ── */
function Particles({ count = 420 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 2.8 + Math.random() * 2.4
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =  state.clock.elapsedTime * 0.04
      ref.current.rotation.x =  state.clock.elapsedTime * 0.015
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.018} color="#C8A96E" transparent opacity={0.45} sizeAttenuation />
    </points>
  )
}

/* ── Orbital ring ── */
function OrbitalRing({ radius, tiltX, tiltZ, speed }: {
  radius: number; tiltX: number; tiltZ: number; speed: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * speed
  })
  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, 0.003, 6, 120]} />
      <meshBasicMaterial color="#C8A96E" transparent opacity={0.18} />
    </mesh>
  )
}

/* ── Breathing glow sphere ── */
function GlowCore() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.06
      ref.current.scale.setScalar(s)
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.55, 24, 24]} />
      <meshBasicMaterial color="#C8A96E" transparent opacity={0.06} />
    </mesh>
  )
}

/* ── Scene ── */
function Scene() {
  return (
    <>
      <GlowCore />
      <Icosahedra />
      <Particles />
      <OrbitalRing radius={3.1}  tiltX={Math.PI / 3}  tiltZ={0.2}  speed={ 0.28} />
      <OrbitalRing radius={3.6}  tiltX={Math.PI / 6}  tiltZ={0.5}  speed={-0.18} />
      <OrbitalRing radius={2.65} tiltX={Math.PI / 2}  tiltZ={0.1}  speed={ 0.12} />
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={0.6} color="#C8A96E" />
    </>
  )
}

/* ── Export ── */
export default function ThreeOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 48 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
