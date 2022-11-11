const cardView = (coin) =>
  `<li class="coin-item">
  <div class="coin">
    <div class="name">
      <h3 class="title-primary">${coin.coinName}</h3>
      <p>Stake CAKE</p>
    </div>
    <div class="coin-logo-img">
      <img
        src=${coin.coinLogo}
        alt="logo"
        class="logo"
      />
      <img
        src="../images/svg/coins/change.svg"
        alt="alt image"
        class="alt-image"
      />
    </div>
  </div>
  <div class="start">
    <div class="apr">
      <h5>APR:</h5>
      <p class="calc-btn" data-id="${coin.id}">${coin.apr}%</p>
    </div>
    <div class="connect">
      <h5>START EARNING</h5>
      <button class="btn-primary">Connect Wallet</button>
    </div>
  </div>
  <div class="details">
    <div class="main">
      <div>
        <div class="manual"><svg viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg" ><path d="M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z"></path></svg>Manual</div>
        <span class="info"></span>
      </div>
      <div class="button">
        <button class="btn-secondary details-btn" data-id="${coin.id}">
          ${
            coin.isDetailsVisible
              ? 'Hide <img src="../images/svg/coins/expand.svg" alt="" style="transform: rotate(180deg)" />'
              : 'Details <img src="../images/svg/coins/expand.svg" alt="" />'
          }
        </button>
      </div>
    </div>
    <div class="total" style="display: ${
      coin.isDetailsVisible ? "block" : "none"
    }">
      <ul>
        <li>
          <div class="tablehead">APR:</div>
          <div class="tablecontent calc-btn" data-id="${coin.id}">${
    coin.apr
  }%</div>
        </li>
        <li>
          <div class="tablehead">Total staked:</div>
          <div class="tablecontent">${coin.totalStaked} CAKE</div>
        </li>
        <li>
          <div class="tablehead">End in:</div>
          <div class="tablecontent">${coin.blocks} blocks</div>
        </li>
      </ul>
      <ul class="links">
        <li>
          <a href="">See Token Info<span class="link"></span></a>
        </li>
        <li>
          <a href="">View Tutorial<span class="link"></span></a>
        </li>
        <li>
          <a href="">View Contract<span class="link"></span></a>
        </li>
      </ul>
    </div>
  </div>
</li>`;
const cardCakeView = (cake) =>
  `<li class="coin-item">
  <div class="coin">
    <div class="name">
      <h3 class="title-primary">Stake CAKE</h3>
      <p>Stake, Earn – And more!</p>
    </div>
    <div class="coin-logo-img">
      <img
        src="../images/svg/coins/pancake.svg"
        alt="logo"
        class="logo"
      />
      <img
        src="../images/svg/coins/change.svg"
        alt="alt image"
        class="alt-image"
      />
    </div>
  </div>
  <div class="start">
    <div class="apy">
      <div class="flexible">
        <h5>FLEXIBLE APY:</h5>
        <p>${cake.flexApy}%</p>
      </div>
      <div class="locked">
        <h5>LOCKED APY:</h5>
        <p>Up to ${cake.lockedApy}%</p>
      </div>
    </div>
    <div class="connect">
      <h5>START EARNING</h5>
      <button class="btn-primary">Connect Wallet</button>
    </div>
  </div>
  <div class="details">
    <div class="main">
      <div>
        <div class="auto">
          <svg
            viewBox="0 0 24 24"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"
            ></path>
          </svg>
          Auto
        </div>
        <span class="info"></span>
      </div>
      <div class="button">
        <button class="btn-secondary details-btn" data-id="${cake.id}">
          ${
            cake.isDetailsVisible
              ? 'Hide <img src="../images/svg/coins/expand.svg" alt="" style="transform: rotate(180deg)" />'
              : 'Details <img src="../images/svg/coins/expand.svg" alt="" />'
          }
        </button>
      </div>
    </div>
    <div class="total" style="display: ${
      cake.isDetailsVisible ? "block" : "none"
    }">
      <ul>
        <li>
          <div class="tablehead">Total staked:</div>
          <div class="tablecontent">${cake.totalStaked} CAKE</div>
        </li>
        <li>
          <div class="tablehead">Total locked:</div>
          <div class="tablecontent">${cake.totalLocked} CAKE</div>
        </li>
        <li>
          <div class="tablehead">Average lock duration:</div>
          <div class="tablecontent">40 weeks</div>
        </li>
        <li>
          <div class="tablehead">Performance Fee</div>
          <div class="tablecontent">0~2%</div>
        </li>
      </ul>
      <ul class="links">
        <li>
          <a href="">See Token Info<span class="link"></span></a>
        </li>
        <li>
          <a href="">View Tutorial<span class="link"></span></a>
        </li>
        <li>
          <a href="">View Contract<span class="link"></span></a>
        </li>
      </ul>
    </div>
  </div>
</li>`;
export default {
  cardView,
  cardCakeView,
};
