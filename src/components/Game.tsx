import { useEffect, useRef, useState } from 'react'
import { BallManager } from '../game/plinko/classes/BallManager'
import { outcomes } from '../game/plinko/outcomes'

export function Game() {
	const [ballManager, setBallManager] = useState<BallManager>()
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const totalDrops = 16
	const multipliers: { [key: number]: number } = {
		0: 16,
		1: 9,
		2: 2,
		3: 1.4,
		4: 1.4,
		5: 1.2,
		6: 1.1,
		7: 1,
		8: 0.5,
		9: 1,
		10: 1.1,
		11: 1.2,
		12: 1.4,
		13: 1.4,
		14: 2,
		15: 9,
		16: 16,
	}

	useEffect(() => {
		if (canvasRef.current) {
			const manager = new BallManager(canvasRef.current)
			setBallManager(manager)
		}
	}, [canvasRef])

	const handleAddBallClick = () => {
		const outcome = Math.floor(Math.random() * totalDrops)
		const possibleOutcomes = outcomes[outcome]
		if (ballManager && possibleOutcomes.length) {
			const randomOutcome =
				possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)]
			ballManager.addBall(randomOutcome)
			console.log({
				point: randomOutcome,
				multiplier: multipliers[outcome],
			})
		}
	}

	return (
		<div>
			<canvas ref={canvasRef} width={800} height={800} />
			<button onClick={handleAddBallClick}>Add ball</button>
		</div>
	)
}
