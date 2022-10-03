import React from 'react'
import { Badge } from '@oneloop/badge'
import { Box } from '@oneloop/box'
import { Checkbox } from '@oneloop/checkbox'
import { Icon } from '@oneloop/icons'
import { Image } from '@oneloop/image'
import theme from '@oneloop/theme'
import '@oneloop/fonts'

export const Button = ({ variant, ...props }) => (
  <Box sx={{ position: 'relative' }}>
    <Box
      as='button'
      tx='buttons'
      variant={variant}
      {...props}
      __css={{
        appearance: 'none',
        display: 'flex',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'normal',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: '12px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    />
  </Box>
)

export const ButtonIcon = ({ icon, variant, text, badgeValue = 0, badgeVariant = 'primary', maxWidth, srcImage, userImage, hasCheckbox, active, isCollapsible, disabled, holdPress, hover, ...props }) => {
  let colorValue
  let colorValueIcon
  let fontSize
  let fontWeight
  if (Array.isArray(variant)) {
    const indexes = variant.map(v => Object.keys(theme.buttons).indexOf(v))
    indexes.map(index => {
      if (Object.values(theme.buttons)[index][':focus'] !== undefined && active) {
        colorValue = Object.values(theme.buttons)[index][':focus'].color
        fontWeight = Object.values(theme.buttons)[index][':focus'].fontWeight
        if (Object.values(theme.buttons)[index].colorIcon !== undefined) {
          colorValueIcon = Object.values(theme.buttons)[index][':focus'].colorIcon
        }
      } else if (Object.values(theme.buttons)[index].color !== undefined) {
        colorValue = Object.values(theme.buttons)[index].color
      } else if (Object.values(theme.buttons)[index].colorIcon !== undefined) {
        colorValueIcon = Object.values(theme.buttons)[index].colorIcon
      } else if (Object.values(theme.buttons)[index].fontWeight !== undefined) {
        fontWeight = Object.values(theme.buttons)[index].fontWeight
      } else if (Object.values(theme.buttons)[index].fontSize !== undefined) {
        fontSize = Object.values(theme.buttons)[index].fontSize
      }
      return colorValue
    })
  } else {
    const index = Object.keys(theme.buttons).indexOf(variant)
    colorValue = Object.values(theme.buttons)[index].color
    colorValueIcon = Object.values(theme.buttons)[index].colorIcon || Object.values(theme.buttons)[index].color
    fontSize = Object.values(theme.buttons)[index].fontSize
    fontWeight = Object.values(theme.buttons)[index].fontWeight
    if (hover) {
      colorValue = Object.values(theme.buttons)[index][':hover'].color
      colorValueIcon = Object.values(theme.buttons)[index][':hover'].colorIcon
      fontWeight = Object.values(theme.buttons)[index][':hover'].fontWeight
    } else if (active) {
      colorValue = Object.values(theme.buttons)[index][':focus'].color
      colorValueIcon = Object.values(theme.buttons)[index][':focus'].colorIcon
      fontWeight = Object.values(theme.buttons)[index][':focus'].fontWeight
    }
  }

  return (
    <Box sx={ maxWidth ? { position: 'relative', width: '100%' } : { position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        variant={variant}
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          lineHeight: 'inherit',
          fontFamily: 'Nunito Sans',
          fontWeight: fontWeight || 'bold',
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          border: 0,
          flexDirection: 'row',
          justifyContent: !maxWidth && 'center',
          width: maxWidth && '100%',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        { hasCheckbox && active && <Checkbox defaultChecked disabled={ disabled }/>}
        { hasCheckbox && !active && <Checkbox defaultChecked={false} disabled={ disabled }/>}
        { icon && <Icon icon={icon} fontSize={fontSize} style={ holdPress && { color: (colorValueIcon || colorValue) }}/> }
        { userImage && srcImage && <Image src={srcImage} variant="avatar"/> }
        { userImage && !srcImage && <span className='icon-contactos' style={{ fontSize: '24px' }}/>}
        { text && !holdPress && <span>{text}</span>}
        { text && holdPress && <span style={colorValue && { color: colorValue, fontWeight: fontWeight }}>{text}</span> }
        { badgeValue === 0 && isCollapsible && <span className='icon-dropdown' style={{ position: 'absolute', right: '10px', color: '#798B97', fontSize: '14px', transform: active ? 'rotate(-180deg)' : 'rotate(0deg)', paddingTop: '4px' }}/> }
        { badgeValue !== 0 && !text && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '2px', left: '16px' }}>{badgeValue}</Badge> }
        { badgeValue !== 0 && text && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', right: '16px' }}>{badgeValue}</Badge> }
      </Box>
    </Box>
  )
}

export const ButtonHoldPress = ({ variant, active = false, text, icon, badgeValue = 0, badgeVariant = 'primary', isCollapsible, disabled = false, maxWidth, hasCheckbox, ...props }) => {
  let colorValue
  let colorValueIcon
  let fontSize
  let fontWeight
  if (Array.isArray(variant)) {
    const indexes = variant.map(v => Object.keys(theme.buttons).indexOf(v))
    indexes.map(index => {
      if (Object.values(theme.buttons)[index][':focus'] !== undefined && active) {
        colorValue = Object.values(theme.buttons)[index][':focus'].color
        fontWeight = Object.values(theme.buttons)[index][':focus'].fontWeight
        if (Object.values(theme.buttons)[index].colorIcon !== undefined) {
          colorValueIcon = Object.values(theme.buttons)[index][':focus'].colorIcon
        }
      } else if (Object.values(theme.buttons)[index].color !== undefined) {
        colorValue = Object.values(theme.buttons)[index].color
      } else if (Object.values(theme.buttons)[index].colorIcon !== undefined) {
        colorValueIcon = Object.values(theme.buttons)[index].colorIcon
      } else if (Object.values(theme.buttons)[index].fontWeight !== undefined) {
        fontWeight = Object.values(theme.buttons)[index].fontWeight
      }
      if (Object.values(theme.buttons)[index].fontSize !== undefined) {
        fontSize = Object.values(theme.buttons)[index].fontSize
      }
      return colorValue
    })
  } else {
    const index = Object.keys(theme.buttons).indexOf(variant)
    colorValue = Object.values(theme.buttons)[index].color
    colorValueIcon = Object.values(theme.buttons)[index].colorIcon
    fontSize = Object.values(theme.buttons)[index].fontSize
    fontWeight = Object.values(theme.buttons)[index].fontWeight
    if (active) {
      colorValue = Object.values(theme.buttons)[index][':focus'].color
      colorValueIcon = Object.values(theme.buttons)[index][':focus'].colorIcon
      fontWeight = Object.values(theme.buttons)[index][':focus'].fontWeight
    }
  }

  return (
    <Box sx={ maxWidth ? { position: 'relative', width: '100%' } : { position: 'relative' }}>
      <Box
        as='button'
        tx='buttons'
        variant={variant}
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          lineHeight: 'inherit',
          fontFamily: 'Nunito Sans',
          fontWeight: { fontWeight },
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          border: 0,
          flexDirection: 'row',
          //  justifyContent: 'center',
          width: maxWidth && '100%',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        { hasCheckbox && active && <Checkbox defaultChecked disabled={ disabled }/>}
        { hasCheckbox && !active && <Checkbox defaultChecked={false} disabled={ disabled }/>}
        { icon && <Icon icon={icon} fontSize={fontSize} style={{ color: (colorValueIcon || colorValue) }}/> }
        { text && <span style={colorValue && { color: colorValue, fontWeight: fontWeight }}>{text}</span>}
        { badgeValue === 0 && isCollapsible && <span className='icon-dropdown' style={{ position: 'absolute', right: '10px', color: '#798B97', fontSize: '14px', transform: active ? 'rotate(-180deg)' : 'rotate(0deg)', paddingTop: '4px' }}/> }
        { badgeValue !== 0 && !text && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', top: '2px', left: '16px' }}>{badgeValue}</Badge> }
        { badgeValue !== 0 && text && <Badge variant={badgeVariant} isNotButton style={{ position: 'absolute', right: '16px' }}>{badgeValue}</Badge> }
      </Box>
    </Box>
  )
}
