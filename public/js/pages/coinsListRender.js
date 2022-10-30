import helpers from "../helpers.js";
import dom from "../dom.js";
import coinsData from "./coinsData.js";

let coins = coinsData.coins;
// UPDATE
const updateCoin = (coinId, coins) =>
  coins.map((coin) => {
    if (coin.id === coinId) {
      return { ...coin, isDetailsVisible: !coin.isDetailsVisible };
    }
    return coin;
  });

// VIEW
const renderCoins = () => {
  dom.listOfCoinsDOM.innerHTML = coins
    .map(
      ({
        id,
        coinLogo,
        coinName,
        totalStaked,
        apr,
        blocks,
        isDetailsVisible,
      }) =>
        id === 1
          ? `<li class="coin-item">
    <div class="main">
      <div class="coin">
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
        <div class="name">
          <h4>Stake CAKE</h4>
          <h6>Stake, Earn – And more!</h6>
        </div>
      </div>
      <div class="earned">
        <h6>CAKE Staked</h6>
        <h5>0.0</h5>
        <p>0 USD</p>
      </div>
      <div class="staked">
        <h6>Flexible APY</h6>
        <h5>2.83%</h5>
      </div>
      <div class="apr">
        <h6>Locked APY</h6>
        <h5>Up to 60.60% <span class="calculator"></span></h5>
      </div>
      <div class="ends-in">
        <h6>Total staked</h6>
        <h5>239,265,889 CAKE</h5>
      </div>
      <button class="btn-secondary details-btn ${
        isDetailsVisible ? "shown" : ""
      }" data-id="1">
        <img src="../images/svg/coins/expand.svg" alt="" />
      </button>
    </div>
    <div class="details" style="display:${isDetailsVisible ? "flex" : "none"}">
      <div class="boxes">
        <div class="earned">
          <h5><span></span>RECENT CAKE PROFIT</h5>
          <div>
            <p>0</p>
          </div>
        </div>
        <div class="start">
          <h5>START STAKING</h5>
          <button class="btn-primary">Connect Wallet</button>
        </div>
      </div>
      <div class="total">
        <ul>
          <li>
            <div class="tablehead">Total locked:</div>
            <div class="tablecontent">195,282,282 CAKE</div>
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
        <div>
          <div class="auto"><svg viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"></path></svg>Auto</div>
          <span class="info"></span>
        </div>
      </div>
    </div>
  </li>`
          : `<li class="coin-item">
  <div class="main">
    <div class="coin">
      <div class="coin-logo-img">
        <img
          src="${coinLogo}"
          alt="logo"
          class="logo"
        />
        <img
          src="../images/svg/coins/pancake.svg"
          alt="alt image"
          class="alt-image"
        />
      </div>
      <div class="name">
        <h4>Stake ${coinName}</h4>
        <h6>Stake CAKE</h6>
      </div>
    </div>
    <div class="earned">
      <h6>CAKE Staked</h6>
      <h5>0.0</h5>
      <p>0 USD</p>
    </div>
    <div class="staked">
      <h6>Total staked</h6>
      <h5>${totalStaked} CAKE</h5>
    </div>
    <div class="apr">
      <h6>APR</h6>
      <h5>${apr}</h5>
    </div>
    <div class="ends-in">
      <h6>Ends in</h6>
      <h5>${blocks} blocks</h5>
    </div>
    <button class="btn-secondary details-btn ${
      isDetailsVisible ? "shown" : ""
    }" data-id="${id}">
      <img src="../images/svg/coins/expand.svg" alt="" />
    </button>
  </div>
  <div class="details" style="display:${isDetailsVisible ? "flex" : "none"}">
    <div class="boxes">
      <div class="earned">
        <h5><span></span>EARNED</h5>
        <div>
          <p>0</p>
          <button class="btn-primary">Harvest</button>
        </div>
      </div>
      <div class="start">
        <h5>START STAKING</h5>
        <button class="btn-primary">Connect Wallet</button>
      </div>
    </div>
    <div class="total">
      <ul>
        <li>
          <div class="tablehead">APR:</div>
          <div class="tablecontent">${apr}</div>
        </li>
        <li>
          <div class="tablehead">Total staked:</div>
          <div class="tablecontent">${totalStaked} CAKE</div>
        </li>
        <li>
          <div class="tablehead">Ends in:</div>
          <div class="tablecontent">${blocks} blocks</div>
        </li>
      </ul>
      <ul class="links">
        <li>
          <a href="">See Token Info<span class="link"></span></a>
        </li>
        <li>
          <a href="">View Project Site<span class="link"></span></a>
        </li>
        <li>
          <a href="">View Contract<span class="link"></span></a>
        </li>
      </ul>
      <div>
        <div class="manual"><svg viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg" ><path d="M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z"></path></svg>Manual</div>
        <span class="info"></span>
      </div>
    </div>
  </div>
</li>`
    )
    .join("");

  const detailsBtnDOM = helpers.qsa("button.details-btn");

  detailsBtnDOM.forEach((node) => {
    node.addEventListener("click", (e) => {
      const coinId = Number(e.target.dataset.id);
      coins = updateCoin(coinId, coins);
      renderCoins();
    });
  });
};

// EVENT

// EXPORT
export default { renderCoins };
