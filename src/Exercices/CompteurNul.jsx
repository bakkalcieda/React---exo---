import { useState } from "react";
export const CompteurNul = () => {
    const [count, setCount] = useState(0);

    const changeCount = (step) => {
        setCount(prev => prev + step);
    };

    return (
        <div className="chapter">
            <h2 className="text-xl bg-amber-600 text-amber-100">Demo 4 - Gestion des événements</h2>

            <div className="flex gap-4 items-center">
                <button onClick={() => changeCount(-1)} className="btn">
                    -
                </button>

                <p className="w-12 text-center">{count}</p>

                <button onClick={() => changeCount(1)} className="btn">
                    +
                </button>
            </div>
        </div>
    );
};