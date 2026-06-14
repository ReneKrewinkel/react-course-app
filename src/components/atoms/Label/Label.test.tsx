import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import Label from './Label'
import { LabelMock } from './Label.mock'

const testID = "Label-" + Math.floor(Math.random()*90000) + 10000

describe("Label", () => {

    it("Can render Label", () => {
       const rendered = renderToStaticMarkup(
          <Label testID={testID} {...LabelMock} />
        )
        expect(rendered).toContain(`data-testid="${testID}"`)
        expect(rendered).toContain('First name')
        expect(rendered).toContain('for="first-name"')
        expect(rendered).toContain('We will only use this to personalize your account.')
        expect(rendered).toContain('Label--m')
    })

})
