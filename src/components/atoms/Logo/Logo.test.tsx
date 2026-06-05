import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
// import { LogoInterface } from './Logo.interface'
import Logo from './Logo'
import { LogoMock } from './Logo.mock'

/// TODO: fix test based upon interface for Logo
const testID = "Logo-" + Math.floor(Math.random()*90000) + 10000

describe("Logo", () => {

    it("Can render Logo", () => {
       const rendered = renderToStaticMarkup(
          <Logo testID={testID} {...LogoMock} />
        )
        expect(rendered).toContain(`data-testid="${testID}"`)
    })

})
