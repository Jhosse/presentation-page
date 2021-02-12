/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link, SxStyleProp } from 'theme-ui'
import React, { FunctionComponent } from 'react'
import { socialIconStyles } from './footerIconsHoverStyles'

const URL = 'https://www.linkedin.com';

export const LinkedIn: FunctionComponent<LinkedInProps> = ({
	styles
}) => {
	return (
		<Link href={URL} sx={{ ...styles, ...socialIconStyles }}>
			<svg width="32" height="32" fill="#2D231C">
				<path
					d="M12 12h5.535v2.837h.079c.77-1.381 2.655-2.837 5.464-2.837C28.92 12 30 15.637 30 20.367V30h-5.769v-8.54c0-2.037-.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509V30H12V12zM2 12h6v18H2V12zM8 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
				/>
			</svg>
		</Link>
	);
}

interface LinkedInProps {
	styles?: SxStyleProp
}
