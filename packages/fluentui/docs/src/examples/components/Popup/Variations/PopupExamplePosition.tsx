import * as React from 'react'
import * as _ from 'lodash'
import { Button, Grid, Popup, Alignment, Position } from '@fluentui/react'
import { useBooleanKnob, useSelectKnob } from '@fluentui/docs-components'

const PopupExamplePosition = () => {
  const [open] = useBooleanKnob({ name: 'open', initialValue: true })
  const [unstable_pinned] = useBooleanKnob({ name: 'unstable_pinned', initialValue: false })

  const [positionAndAlign] = useSelectKnob({
    name: 'position-align',
    initialValue: 'above-start',
    values: positionAndAlignValues,
  })

  const [position, align] = _.split(positionAndAlign, '-') as [Position, Alignment]
  const buttonStyles = { padding: paddings[positionAndAlign], height: '38px', minWidth: '64px' }

  return (
    <Grid columns="1" variables={{ padding: '100px 0' }} styles={{ justifyItems: 'center' }}>
      <Popup
        open={open || undefined}
        align={align}
        position={position}
        unstable_pinned={unstable_pinned}
        content={
          <p>
            The popup is rendered {position} the trigger
            <br />
            aligned to the {align}.
          </p>
        }
      >
        <Button
          icon={{ name: iconNames[position], circular: true, bordered: true }}
          styles={buttonStyles}
          title="Show popup"
        />
      </Popup>
    </Grid>
  )
}

export default PopupExamplePosition

const positionAndAlignValues = [
  'above-start',
  'above-center',
  'above-end',
  'below-start',
  'below-center',
  'below-end',
  'before-top',
  'before-center',
  'before-bottom',
  'after-top',
  'after-center',
  'after-bottom',
]

const iconNames: Record<Position, string> = {
  above: 'arrow-up',
  below: 'arrow-down',
  before: 'arrow-left',
  after: 'arrow-right',
}

const paddings: Record<string, React.CSSProperties['padding']> = {
  'above-start': '5px 42px 18px 5px',
  'above-center': '5px 5px 18px 5px',
  'above-end': '5px 5px 18px 42px',
  'below-start': '18px 42px 5px 5px',
  'below-center': '18px 5px 5px 5px',
  'below-end': '18px 5px 5px 42px',
  'before-top': '5px 42px 18px 5px',
  'before-center': '5px 42px 5px 5px',
  'before-bottom': '18px 42px 5px 5px',
  'after-top': '5px 5px 18px 42px',
  'after-center': '5px 5px 5px 42px',
  'after-bottom': '18px 5px 5px 42px',
}
