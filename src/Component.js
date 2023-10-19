import React, { useState } from "react";

import { css } from "emotion";

function Component() {
  return (
    <div className={container}>
      <div>Welcome to React Boiler Plate!</div>
      <div className={reactIcon}>⚛</div>
    </div>
  );
}

export default Component;

const container = css`
  padding: 1.5rem;
`;

const reactIcon = css`
	font-size: 6rem;

	animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 

  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;
