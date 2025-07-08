"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { Vector3 } from "three"

function FloatingParticles({ count = 50 }) {
  const mesh = useRef()
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const colors = ["#06b6d4", "#8b5cf6", "#10b981", "#ec4899"]
    const tempParticles = []

    for (let i = 0; i < count; i++) {
      const position = new Vector3((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12)

      if (position.length() < 2) {
        position.normalize().multiplyScalar(2)
      }

      tempParticles.push({
        position: [position.x, position.y, position.z],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: Math.random() * 0.3 + 0.1,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      })
    }
    setParticles(tempParticles)
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime()
      mesh.current.rotation.x = Math.sin(time / 10) * 0.1
      mesh.current.rotation.y = Math.cos(time / 10) * 0.1
    }
  })

  return (
    <group ref={mesh}>
      {particles.map((particle, i) => (
        <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={particle.position} scale={particle.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={particle.color}
              roughness={0.2}
              metalness={0.8}
              emissive={particle.color}
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function AnimatedSphere() {
  const mesh = useRef()

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime()
      mesh.current.rotation.y = time * 0.15
      mesh.current.rotation.z = time * 0.1
      mesh.current.position.y = Math.sin(time * 0.4) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} scale={2} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          roughness={0.1}
          metalness={0.9}
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
          wireframe={true}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    if (camera) {
      camera.position.z = 10
    }
  }, [camera])

  useFrame((state) => {
    if (camera) {
      const time = state.clock.getElapsedTime()
      camera.position.x = Math.sin(time * 0.1) * 0.5
      camera.position.y = Math.cos(time * 0.1) * 0.5
      camera.lookAt(0, 0, 0)
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <FloatingParticles count={30} />
      <Environment preset="city" />
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10" />
    </div>
  )
}

export function ThreeDBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <LoadingFallback />
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-60">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor("#000000", 0)
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}
