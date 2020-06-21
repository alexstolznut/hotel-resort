import React from 'react'

export default function Hero({children, hero}) {
    return (
        <header className={hero || "roomsHero"}>
            {children}
        </header>
    )
}

Hero.defaultProps = {
    'hero':'defaultHero'
}