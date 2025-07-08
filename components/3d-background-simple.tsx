"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"

function FloatingShapes() {
  const group = useRef()
  const [shapes, setShapes] = useState([])

  useEffect(() => {
    const colors = ["#06b6d4", "#8b5cf6", "#10b981", "#ec4899"]
    const tempShapes = []

    for (let i = 0; i < 6; i++) {
      tempShapes.push({
        position: [(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6],
        color: colors[i % colors.length],
        type: i % 3,
        scale: Math.random() * 0.4 + 0.3,
      })
    }
    setShapes(tempShapes)
  }, [])

  useFrame((state) => {
    if (group.current) {
      const time = state.clock.getElapsedTime()
      group.current.rotation.y = time * 0.05
    }
  })

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={shape.position} scale={shape.scale}>
            {shape.type === 0 ? (
              <octahedronGeometry args={[0.6]} />
            ) : shape.type === 1 ? (
              <dodecahedronGeometry args={[0.6]} />
            ) : (
              <icosahedronGeometry args={[0.6]} />
            )}
            <meshStandardMaterial
              color={shape.color}
              roughness={0.2}
              metalness={0.8}
              emissive={shape.color}
              emissiveIntensity={0.2}
              wireframe={i % 2 === 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function SimpleLoadingFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
    </div>
  )
}

export function ThreeDBackgroundSimple() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <SimpleLoadingFallback />
  }

  return (
    <div className="absolute inset-0 pointer-events-none opacity-25">
      <Suspense fallback={<SimpleLoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor("#000000", 0)
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingShapes />
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </div>
  )
}
