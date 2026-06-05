// import { useState, useEffect, useContext } from 'react'
import type { LogoInterface } from './Logo.interface'

/// TODO: update interface/arguments for Logo
const Logo = ({testID, style, type, size, props }:LogoInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Logo` }>
        </div>
    )

}

export default Logo
