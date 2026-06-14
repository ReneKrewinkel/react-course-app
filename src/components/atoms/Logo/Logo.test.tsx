import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import Logo from './Logo'
import { LogoMock } from './Logo.mock'

const testID = "Logo-" + Math.floor(Math.random()*90000) + 10000

describe("Logo", () => {

    it("Can render Logo", () => {
       const rendered = renderToStaticMarkup(
          <Logo testID={testID} {...LogoMock} />
        )
        expect(rendered).toContain(`data-testid="${testID}"`)
        expect(rendered).toContain('React Course App')
        expect(rendered).toContain('Atomic structure for your React training app')
        expect(rendered).toContain('href="/"')
        expect(rendered).toContain('Logo--m')
    })

})
