import { Pie } from '@visx/shape'
import { Group } from '@visx/group'
import { GradientTealBlue } from '@visx/gradient'
import { letterFrequency } from '@visx/mock-data'

const white = '#ffffff'
const black = '#000000'

const dummyData = [
  {
    label: 'Horror',
    usage: '28',
  },
  {
    label: 'Action movies',
    usage: '53',
  },
  {
    label: 'Drama',
    usage: '10',
  },
  {
    label: 'Comedy',
    usage: '14',
  },
]

const letters = letterFrequency.slice(0, 4)

const usage = (d) => d.usage
const frequency = (d) => d.frequency

export default function Graph({ width, height }) {
  const radius = Math.min(width, height) / 2
  const centerY = height / 2
  const centerX = width / 2

  return (
    <svg width={width} height={height}>
      <GradientTealBlue id="pie-gradients" />
      <rect
        rx={14}
        width={width}
        height={height}
        fill="url('#pie-gradients')"
      />
      <Group top={centerY} left={centerX}>
        <Pie
          data={dummyData}
          pieValue={usage}
          outerRadius={radius - 20}
          innerRadius={radius - 80}
          cornerRadius={3}
          padAngle={0}
        >
          {(pie) => {
            return pie.arcs.map((arc, i) => {
              const opacity = 1 / (i + 2)
              const [centroidX, centroidY] = pie.path.centroid(arc)
              const { startAngle, endAngle } = arc
              const hasSpaceForLabel = endAngle - startAngle >= 0.1
              return (
                <g key={`browser-${arc.data.label}-${i}`}>
                  <path d={pie.path(arc)} fill={white} fillOpacity={opacity} />
                  {hasSpaceForLabel && (
                    <text
                      fill={white}
                      x={centroidX}
                      y={centroidY}
                      dy=".63em"
                      fontSize={16}
                      textAnchor="middle"
                    >
                      {arc.data.label}
                    </text>
                  )}
                </g>
              )
            })
          }}
        </Pie>
        <Pie data={letters} pieValue={frequency} outerRadius={radius - 135}>
          {(pie) => {
            return pie.arcs.map((arc, i) => {
              const opacity = 1 / (i + 2)
              const [centroidX, centroidY] = pie.path.centroid(arc)
              return (
                <g key={`letters-${arc.data.label}-${i}`}>
                  <path d={pie.path(arc)} fill={black} fillOpacity={opacity} />
                  <text
                    fill="white"
                    textAnchor="middle"
                    x={centroidX}
                    y={centroidY}
                    dy=".33em"
                    fontSize={17}
                  >
                    {arc.data.letter}
                  </text>
                </g>
              )
            })
          }}
        </Pie>
      </Group>
    </svg>
  )
}
