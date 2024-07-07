import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import { Button } from "../components/ui";
import { outcomes } from "../game/outcomes";

export function Game() {
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<any>();
  const TOTAL_DROPS = 16;
  const MULTIPLIERS: { [key: number]: number } = {
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
  };

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <Button
        className="px-10 mb-4"
        onClick={async () => {
          let outcome = 0;
          const pattern = [];
          for (let i = 0; i < TOTAL_DROPS; i++) {
            if (Math.random() > 0.5) {
              pattern.push("R");
              outcome++;
            } else {
              pattern.push("L");
            }
          }

          const multiplier = MULTIPLIERS[outcome];
          // @ts-ignore
          const possibleOutcomes = outcomes[outcome];
          if (ballManager) {
            ballManager.addBall(
              possibleOutcomes[
                Math.floor(Math.random() * possibleOutcomes.length || 0)
              ]
            );
            console.log({
              point:
                possibleOutcomes[
                  Math.floor(Math.random() * possibleOutcomes.length || 0)
                ],
              pattern,
              multiplier,
            });
          }
        }}
      >
        Add ball
      </Button>
    </div>
  );
}
