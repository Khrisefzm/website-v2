import React from "react";

export default (props) => (
  <svg
    width={props.width || "65"}
    height={props.height || "51"}
    style={props.style}
    viewBox="0 0 65 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="13"
      y="17"
      width="52"
      height="34"
      rx="17"
      fill={props.color || "#0084FF"}
    />
    <mask
      id="path-2-outside-1_12046_334"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="53"
      height="48"
      fill="black"
    >
      <rect fill="white" width="53" height="48" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.66666 44.4317C9.36944 44.4317 9.94444 45.0067 9.94444 45.7094C9.94444 46.4122 9.36944 46.9872 8.66666 46.9872C7.96389 46.9872 7.38889 46.4122 7.38889 45.7094C7.38889 45.0067 7.96389 44.4317 8.66666 44.4317ZM18.8889 44.4317H12.5C11.7972 44.4317 11.2222 45.0067 11.2222 45.7094C11.2222 46.4122 11.7972 46.9872 12.5 46.9872H18.8889C19.5917 46.9872 20.1667 46.4122 20.1667 45.7094C20.1667 45.0067 19.5917 44.4317 18.8889 44.4317ZM20.9461 9.97C19.0933 10.8517 17.3683 12.1422 15.835 13.7139C14.6978 14.8767 13.6628 16.1928 12.7683 17.6111H6.11111C5.40833 17.6111 4.83333 18.1861 4.83333 18.8889C4.83333 19.5917 5.40833 20.1667 6.11111 20.1667H11.3244C9.89333 23.0417 8.98611 26.1594 8.73055 29.1111H6.11111C5.40833 29.1111 4.83333 29.6861 4.83333 30.3889C4.83333 31.0917 5.40833 31.6667 6.11111 31.6667H8.69222C9.19055 40.905 16.9211 44.4444 26.5555 44.4444C29.3028 44.4444 31.9094 44.1505 34.2094 43.5244C35.1672 44.6184 36.3481 45.4946 37.6727 46.094C38.9973 46.6935 40.4349 47.0024 41.8889 47C47.5367 47 52.1111 42.4255 52.1111 36.7778C52.1111 31.8839 48.6611 27.7822 44.0483 26.7856C43.0389 21.5722 40.1383 16.18 36.1772 12.6789C34.925 11.58 33.5833 10.66 32.1522 9.98278L34.1328 4.64167C34.3117 4.15611 34.1839 3.59389 33.7878 3.24889C33.7878 3.24889 31.3855 1 26.5428 1C21.7 1 19.2978 3.24889 19.2978 3.24889C18.9017 3.59389 18.7739 4.15611 18.9528 4.64167L20.9333 9.98278L20.9461 9.97ZM41.8889 29.0983C46.1183 29.0983 49.5555 32.5355 49.5555 36.765C49.5555 40.9944 46.1183 44.4317 41.8889 44.4317C37.6594 44.4317 34.2222 40.9944 34.2222 36.765C34.2222 32.5355 37.6594 29.0983 41.8889 29.0983ZM41.3905 26.5556C40.3683 22.0961 37.8639 17.5728 34.4905 14.5828C32.1778 12.5383 29.4689 11.2094 26.5555 11.2094C23.2206 11.2094 20.1667 12.9344 17.6622 15.49C13.765 19.4767 11.2222 25.495 11.2222 30.6956C11.2222 39.0778 18.1733 41.8761 26.5555 41.8761C28.7405 41.8761 30.8105 41.6844 32.7017 41.2628C32.0163 39.8627 31.6621 38.3238 31.6667 36.765C31.6668 34.1403 32.6766 31.6162 34.4868 29.7156C36.297 27.815 38.7689 26.6835 41.3905 26.5556ZM7.38889 38.0428H2.27778C1.575 38.0428 1 38.6178 1 39.3205C1 40.0233 1.575 40.5983 2.27778 40.5983H7.38889C8.09166 40.5983 8.66666 40.0233 8.66666 39.3205C8.66666 38.6178 8.09166 38.0428 7.38889 38.0428ZM40.6111 32.9317V36.765C40.6111 37.4678 41.1861 38.0428 41.8889 38.0428H45.7222C46.425 38.0428 47 37.4678 47 36.765C47 36.0622 46.425 35.4872 45.7222 35.4872H43.1667V32.9317C43.1667 32.2289 42.5917 31.6539 41.8889 31.6539C41.1861 31.6539 40.6111 32.2289 40.6111 32.9317ZM25.2778 22.7733C24.5014 22.931 23.8113 23.3715 23.3415 24.0093C22.8717 24.6471 22.6556 25.4367 22.7352 26.2249C22.8148 27.0131 23.1844 27.7436 23.7723 28.2746C24.3602 28.8055 25.1245 29.0991 25.9167 29.0983H27.1944C27.3605 29.0983 27.5267 29.1622 27.6417 29.29C27.7567 29.405 27.8333 29.5711 27.8333 29.7372C27.8333 29.9033 27.7694 30.0694 27.6417 30.1844C27.5229 30.3037 27.3627 30.3724 27.1944 30.3761H24C23.2972 30.3761 22.7222 30.9511 22.7222 31.6539C22.7222 32.3567 23.2972 32.9317 24 32.9317H25.2778V34.2094C25.2778 34.9122 25.8528 35.4872 26.5555 35.4872C27.2583 35.4872 27.8333 34.9122 27.8333 34.2094V32.8678C28.5562 32.7232 29.2064 32.3319 29.6725 31.7608C30.1387 31.1897 30.3919 30.4744 30.3889 29.7372C30.3889 28.8811 30.0567 28.0761 29.4561 27.4755C28.8555 26.875 28.0505 26.5428 27.1944 26.5428H25.9167C25.8329 26.5438 25.7498 26.5273 25.6728 26.4943C25.5957 26.4612 25.5265 26.4125 25.4694 26.3511C25.3544 26.2361 25.2778 26.07 25.2778 25.9039C25.2778 25.7378 25.3417 25.5717 25.4694 25.4567C25.5882 25.3374 25.7484 25.2687 25.9167 25.265H29.1111C29.8139 25.265 30.3889 24.69 30.3889 23.9872C30.3889 23.2844 29.8139 22.7094 29.1111 22.7094H27.8333V21.4317C27.8333 20.7289 27.2583 20.1539 26.5555 20.1539C25.8528 20.1539 25.2778 20.7289 25.2778 21.4317V22.7733ZM2.27778 29.0983C2.98056 29.0983 3.55555 29.6733 3.55555 30.3761C3.55555 31.0789 2.98056 31.6539 2.27778 31.6539C1.575 31.6539 1 31.0789 1 30.3761C1 29.6733 1.575 29.0983 2.27778 29.0983ZM29.7628 9.07555C30.1972 7.91278 31.3983 4.66722 31.3983 4.66722C30.555 4.19444 28.9322 3.53 26.5555 3.53C24.1789 3.53 22.5561 4.19444 21.7128 4.66722L23.3483 9.07555C24.3961 8.79444 25.4694 8.65389 26.5555 8.65389C27.6417 8.65389 28.7278 8.80722 29.7628 9.07555ZM6.11111 4.82055C6.81389 4.82055 7.38889 5.39555 7.38889 6.09833C7.38889 6.80111 6.81389 7.37611 6.11111 7.37611C5.40833 7.37611 4.83333 6.80111 4.83333 6.09833C4.83333 5.39555 5.40833 4.82055 6.11111 4.82055ZM16.3333 4.82055H9.94444C9.24166 4.82055 8.66666 5.39555 8.66666 6.09833C8.66666 6.80111 9.24166 7.37611 9.94444 7.37611H16.3333C17.0361 7.37611 17.6111 6.80111 17.6111 6.09833C17.6111 5.39555 17.0361 4.82055 16.3333 4.82055Z"
      />
    </mask>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.66666 44.4317C9.36944 44.4317 9.94444 45.0067 9.94444 45.7094C9.94444 46.4122 9.36944 46.9872 8.66666 46.9872C7.96389 46.9872 7.38889 46.4122 7.38889 45.7094C7.38889 45.0067 7.96389 44.4317 8.66666 44.4317ZM18.8889 44.4317H12.5C11.7972 44.4317 11.2222 45.0067 11.2222 45.7094C11.2222 46.4122 11.7972 46.9872 12.5 46.9872H18.8889C19.5917 46.9872 20.1667 46.4122 20.1667 45.7094C20.1667 45.0067 19.5917 44.4317 18.8889 44.4317ZM20.9461 9.97C19.0933 10.8517 17.3683 12.1422 15.835 13.7139C14.6978 14.8767 13.6628 16.1928 12.7683 17.6111H6.11111C5.40833 17.6111 4.83333 18.1861 4.83333 18.8889C4.83333 19.5917 5.40833 20.1667 6.11111 20.1667H11.3244C9.89333 23.0417 8.98611 26.1594 8.73055 29.1111H6.11111C5.40833 29.1111 4.83333 29.6861 4.83333 30.3889C4.83333 31.0917 5.40833 31.6667 6.11111 31.6667H8.69222C9.19055 40.905 16.9211 44.4444 26.5555 44.4444C29.3028 44.4444 31.9094 44.1505 34.2094 43.5244C35.1672 44.6184 36.3481 45.4946 37.6727 46.094C38.9973 46.6935 40.4349 47.0024 41.8889 47C47.5367 47 52.1111 42.4255 52.1111 36.7778C52.1111 31.8839 48.6611 27.7822 44.0483 26.7856C43.0389 21.5722 40.1383 16.18 36.1772 12.6789C34.925 11.58 33.5833 10.66 32.1522 9.98278L34.1328 4.64167C34.3117 4.15611 34.1839 3.59389 33.7878 3.24889C33.7878 3.24889 31.3855 1 26.5428 1C21.7 1 19.2978 3.24889 19.2978 3.24889C18.9017 3.59389 18.7739 4.15611 18.9528 4.64167L20.9333 9.98278L20.9461 9.97ZM41.8889 29.0983C46.1183 29.0983 49.5555 32.5355 49.5555 36.765C49.5555 40.9944 46.1183 44.4317 41.8889 44.4317C37.6594 44.4317 34.2222 40.9944 34.2222 36.765C34.2222 32.5355 37.6594 29.0983 41.8889 29.0983ZM41.3905 26.5556C40.3683 22.0961 37.8639 17.5728 34.4905 14.5828C32.1778 12.5383 29.4689 11.2094 26.5555 11.2094C23.2206 11.2094 20.1667 12.9344 17.6622 15.49C13.765 19.4767 11.2222 25.495 11.2222 30.6956C11.2222 39.0778 18.1733 41.8761 26.5555 41.8761C28.7405 41.8761 30.8105 41.6844 32.7017 41.2628C32.0163 39.8627 31.6621 38.3238 31.6667 36.765C31.6668 34.1403 32.6766 31.6162 34.4868 29.7156C36.297 27.815 38.7689 26.6835 41.3905 26.5556ZM7.38889 38.0428H2.27778C1.575 38.0428 1 38.6178 1 39.3205C1 40.0233 1.575 40.5983 2.27778 40.5983H7.38889C8.09166 40.5983 8.66666 40.0233 8.66666 39.3205C8.66666 38.6178 8.09166 38.0428 7.38889 38.0428ZM40.6111 32.9317V36.765C40.6111 37.4678 41.1861 38.0428 41.8889 38.0428H45.7222C46.425 38.0428 47 37.4678 47 36.765C47 36.0622 46.425 35.4872 45.7222 35.4872H43.1667V32.9317C43.1667 32.2289 42.5917 31.6539 41.8889 31.6539C41.1861 31.6539 40.6111 32.2289 40.6111 32.9317ZM25.2778 22.7733C24.5014 22.931 23.8113 23.3715 23.3415 24.0093C22.8717 24.6471 22.6556 25.4367 22.7352 26.2249C22.8148 27.0131 23.1844 27.7436 23.7723 28.2746C24.3602 28.8055 25.1245 29.0991 25.9167 29.0983H27.1944C27.3605 29.0983 27.5267 29.1622 27.6417 29.29C27.7567 29.405 27.8333 29.5711 27.8333 29.7372C27.8333 29.9033 27.7694 30.0694 27.6417 30.1844C27.5229 30.3037 27.3627 30.3724 27.1944 30.3761H24C23.2972 30.3761 22.7222 30.9511 22.7222 31.6539C22.7222 32.3567 23.2972 32.9317 24 32.9317H25.2778V34.2094C25.2778 34.9122 25.8528 35.4872 26.5555 35.4872C27.2583 35.4872 27.8333 34.9122 27.8333 34.2094V32.8678C28.5562 32.7232 29.2064 32.3319 29.6725 31.7608C30.1387 31.1897 30.3919 30.4744 30.3889 29.7372C30.3889 28.8811 30.0567 28.0761 29.4561 27.4755C28.8555 26.875 28.0505 26.5428 27.1944 26.5428H25.9167C25.8329 26.5438 25.7498 26.5273 25.6728 26.4943C25.5957 26.4612 25.5265 26.4125 25.4694 26.3511C25.3544 26.2361 25.2778 26.07 25.2778 25.9039C25.2778 25.7378 25.3417 25.5717 25.4694 25.4567C25.5882 25.3374 25.7484 25.2687 25.9167 25.265H29.1111C29.8139 25.265 30.3889 24.69 30.3889 23.9872C30.3889 23.2844 29.8139 22.7094 29.1111 22.7094H27.8333V21.4317C27.8333 20.7289 27.2583 20.1539 26.5555 20.1539C25.8528 20.1539 25.2778 20.7289 25.2778 21.4317V22.7733ZM2.27778 29.0983C2.98056 29.0983 3.55555 29.6733 3.55555 30.3761C3.55555 31.0789 2.98056 31.6539 2.27778 31.6539C1.575 31.6539 1 31.0789 1 30.3761C1 29.6733 1.575 29.0983 2.27778 29.0983ZM29.7628 9.07555C30.1972 7.91278 31.3983 4.66722 31.3983 4.66722C30.555 4.19444 28.9322 3.53 26.5555 3.53C24.1789 3.53 22.5561 4.19444 21.7128 4.66722L23.3483 9.07555C24.3961 8.79444 25.4694 8.65389 26.5555 8.65389C27.6417 8.65389 28.7278 8.80722 29.7628 9.07555ZM6.11111 4.82055C6.81389 4.82055 7.38889 5.39555 7.38889 6.09833C7.38889 6.80111 6.81389 7.37611 6.11111 7.37611C5.40833 7.37611 4.83333 6.80111 4.83333 6.09833C4.83333 5.39555 5.40833 4.82055 6.11111 4.82055ZM16.3333 4.82055H9.94444C9.24166 4.82055 8.66666 5.39555 8.66666 6.09833C8.66666 6.80111 9.24166 7.37611 9.94444 7.37611H16.3333C17.0361 7.37611 17.6111 6.80111 17.6111 6.09833C17.6111 5.39555 17.0361 4.82055 16.3333 4.82055Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.66666 44.4317C9.36944 44.4317 9.94444 45.0067 9.94444 45.7094C9.94444 46.4122 9.36944 46.9872 8.66666 46.9872C7.96389 46.9872 7.38889 46.4122 7.38889 45.7094C7.38889 45.0067 7.96389 44.4317 8.66666 44.4317ZM18.8889 44.4317H12.5C11.7972 44.4317 11.2222 45.0067 11.2222 45.7094C11.2222 46.4122 11.7972 46.9872 12.5 46.9872H18.8889C19.5917 46.9872 20.1667 46.4122 20.1667 45.7094C20.1667 45.0067 19.5917 44.4317 18.8889 44.4317ZM20.9461 9.97C19.0933 10.8517 17.3683 12.1422 15.835 13.7139C14.6978 14.8767 13.6628 16.1928 12.7683 17.6111H6.11111C5.40833 17.6111 4.83333 18.1861 4.83333 18.8889C4.83333 19.5917 5.40833 20.1667 6.11111 20.1667H11.3244C9.89333 23.0417 8.98611 26.1594 8.73055 29.1111H6.11111C5.40833 29.1111 4.83333 29.6861 4.83333 30.3889C4.83333 31.0917 5.40833 31.6667 6.11111 31.6667H8.69222C9.19055 40.905 16.9211 44.4444 26.5555 44.4444C29.3028 44.4444 31.9094 44.1505 34.2094 43.5244C35.1672 44.6184 36.3481 45.4946 37.6727 46.094C38.9973 46.6935 40.4349 47.0024 41.8889 47C47.5367 47 52.1111 42.4255 52.1111 36.7778C52.1111 31.8839 48.6611 27.7822 44.0483 26.7856C43.0389 21.5722 40.1383 16.18 36.1772 12.6789C34.925 11.58 33.5833 10.66 32.1522 9.98278L34.1328 4.64167C34.3117 4.15611 34.1839 3.59389 33.7878 3.24889C33.7878 3.24889 31.3855 1 26.5428 1C21.7 1 19.2978 3.24889 19.2978 3.24889C18.9017 3.59389 18.7739 4.15611 18.9528 4.64167L20.9333 9.98278L20.9461 9.97ZM41.8889 29.0983C46.1183 29.0983 49.5555 32.5355 49.5555 36.765C49.5555 40.9944 46.1183 44.4317 41.8889 44.4317C37.6594 44.4317 34.2222 40.9944 34.2222 36.765C34.2222 32.5355 37.6594 29.0983 41.8889 29.0983ZM41.3905 26.5556C40.3683 22.0961 37.8639 17.5728 34.4905 14.5828C32.1778 12.5383 29.4689 11.2094 26.5555 11.2094C23.2206 11.2094 20.1667 12.9344 17.6622 15.49C13.765 19.4767 11.2222 25.495 11.2222 30.6956C11.2222 39.0778 18.1733 41.8761 26.5555 41.8761C28.7405 41.8761 30.8105 41.6844 32.7017 41.2628C32.0163 39.8627 31.6621 38.3238 31.6667 36.765C31.6668 34.1403 32.6766 31.6162 34.4868 29.7156C36.297 27.815 38.7689 26.6835 41.3905 26.5556ZM7.38889 38.0428H2.27778C1.575 38.0428 1 38.6178 1 39.3205C1 40.0233 1.575 40.5983 2.27778 40.5983H7.38889C8.09166 40.5983 8.66666 40.0233 8.66666 39.3205C8.66666 38.6178 8.09166 38.0428 7.38889 38.0428ZM40.6111 32.9317V36.765C40.6111 37.4678 41.1861 38.0428 41.8889 38.0428H45.7222C46.425 38.0428 47 37.4678 47 36.765C47 36.0622 46.425 35.4872 45.7222 35.4872H43.1667V32.9317C43.1667 32.2289 42.5917 31.6539 41.8889 31.6539C41.1861 31.6539 40.6111 32.2289 40.6111 32.9317ZM25.2778 22.7733C24.5014 22.931 23.8113 23.3715 23.3415 24.0093C22.8717 24.6471 22.6556 25.4367 22.7352 26.2249C22.8148 27.0131 23.1844 27.7436 23.7723 28.2746C24.3602 28.8055 25.1245 29.0991 25.9167 29.0983H27.1944C27.3605 29.0983 27.5267 29.1622 27.6417 29.29C27.7567 29.405 27.8333 29.5711 27.8333 29.7372C27.8333 29.9033 27.7694 30.0694 27.6417 30.1844C27.5229 30.3037 27.3627 30.3724 27.1944 30.3761H24C23.2972 30.3761 22.7222 30.9511 22.7222 31.6539C22.7222 32.3567 23.2972 32.9317 24 32.9317H25.2778V34.2094C25.2778 34.9122 25.8528 35.4872 26.5555 35.4872C27.2583 35.4872 27.8333 34.9122 27.8333 34.2094V32.8678C28.5562 32.7232 29.2064 32.3319 29.6725 31.7608C30.1387 31.1897 30.3919 30.4744 30.3889 29.7372C30.3889 28.8811 30.0567 28.0761 29.4561 27.4755C28.8555 26.875 28.0505 26.5428 27.1944 26.5428H25.9167C25.8329 26.5438 25.7498 26.5273 25.6728 26.4943C25.5957 26.4612 25.5265 26.4125 25.4694 26.3511C25.3544 26.2361 25.2778 26.07 25.2778 25.9039C25.2778 25.7378 25.3417 25.5717 25.4694 25.4567C25.5882 25.3374 25.7484 25.2687 25.9167 25.265H29.1111C29.8139 25.265 30.3889 24.69 30.3889 23.9872C30.3889 23.2844 29.8139 22.7094 29.1111 22.7094H27.8333V21.4317C27.8333 20.7289 27.2583 20.1539 26.5555 20.1539C25.8528 20.1539 25.2778 20.7289 25.2778 21.4317V22.7733ZM2.27778 29.0983C2.98056 29.0983 3.55555 29.6733 3.55555 30.3761C3.55555 31.0789 2.98056 31.6539 2.27778 31.6539C1.575 31.6539 1 31.0789 1 30.3761C1 29.6733 1.575 29.0983 2.27778 29.0983ZM29.7628 9.07555C30.1972 7.91278 31.3983 4.66722 31.3983 4.66722C30.555 4.19444 28.9322 3.53 26.5555 3.53C24.1789 3.53 22.5561 4.19444 21.7128 4.66722L23.3483 9.07555C24.3961 8.79444 25.4694 8.65389 26.5555 8.65389C27.6417 8.65389 28.7278 8.80722 29.7628 9.07555ZM6.11111 4.82055C6.81389 4.82055 7.38889 5.39555 7.38889 6.09833C7.38889 6.80111 6.81389 7.37611 6.11111 7.37611C5.40833 7.37611 4.83333 6.80111 4.83333 6.09833C4.83333 5.39555 5.40833 4.82055 6.11111 4.82055ZM16.3333 4.82055H9.94444C9.24166 4.82055 8.66666 5.39555 8.66666 6.09833C8.66666 6.80111 9.24166 7.37611 9.94444 7.37611H16.3333C17.0361 7.37611 17.6111 6.80111 17.6111 6.09833C17.6111 5.39555 17.0361 4.82055 16.3333 4.82055Z"
      stroke="black"
      mask="url(#path-2-outside-1_12046_334)"
    />
  </svg>
);
