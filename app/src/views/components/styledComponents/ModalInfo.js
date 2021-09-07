import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 50;
`

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 5%;
  left: 50%;
  width: 90vw;
  max-width: 1040px;
  height: 100vh;
  max-height: 110vh;
  transform: translateX(-50%);
  color: white;
  display: flex;
  border-radius: 12px;
  background: #1a1b1b;
  box-shadow: 1px 1px 155px 2px rgba(0, 0, 0, 0.5);

  > div {
    overflow-y: auto;
    height: auto;
    width: 100%;
    padding-bottom: 120px;

    & {
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
    }
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }

  > div.loading {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const Heading = styled.div`
  position: relative;
  min-height: 700px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  border-radius: 12px 12px 0 0;

  > button {
    position: fixed;
    top: 2%;
    right: 2%;
    height: 40px;
    width: 40px;
    font-size: 1.6rem;
    background: black;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 5;
  }

  > img {
    position: absolute;
    bottom: 5%;
    right: 4%;
    width: 120px;
    border-radius: 2px;
    z-index: 5;
  }

  > div {
    position: absolute;
    width: auto;
    left: 5%;
    bottom: 5%;
    z-index: 5;

    > h6 {
      color: ${(props) => props.theme.fontColorPure};
      margin: 0;
      margin-bottom: 16px;
      font-size: 3.2rem;
      letter-spacing: 2px;
      text-shadow: rgba(0, 0, 0, 0.65) 2px 2px 4px;
    }

    > div.buttons {
      display: flex;

      > button {
        margin-right: 6px;
      }

      > button.watchlist {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 11.2px 33.6px 11.2px 28px;
        color: rgba(0, 0, 0);
        font-size: 16px;
        font-weight: 600;
        background: #fff;
        cursor: pointer;
        border-radius: 4px;
        border: none;
        min-height: 32px;
        max-height: 42px;
        line-height: 19.2px;

        &:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        > div.watchlistDivider {
          width: 1rem;
        }
      }

      > button.watchlistLike {
        cursor: pointer;
        min-width: 32px;
        min-height: 32px;
        max-width: 42px;
        max-height: 42px;
        padding: 9.63px;
        border: 2px solid rgba(255, 255, 255, 0.5);
        background: transparent;
        border-radius: 50%;

        > svg {
          font-size: 18px;
          color: rgba(255, 255, 255);
        }
      }
    }
  }

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 55%;
    background: linear-gradient(to left, transparent 0%, #1a1b1b 190%);
  }

  ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 220px;
    background: linear-gradient(to bottom, transparent 0%, #1a1b1b 99%);
  }
`

export const Info = styled.div`
  position: relative;
  display: flex;
  padding: 2% 5%;

  > .info {
    width: 65%;
    padding: 6px;

    > .infoTop {
      display: flex;

      > p {
        margin-right: 8px;
      }

      > p.infoTopRating {
        color: #46d369;
      }
    }

    .infoOverviewTagline {
      color: #777777;
      font-size: 14px;
      line-height: 15px;
      margin-bottom: -10px;
    }

    .infoOverview {
      font-size: 18px;
      line-height: 27px;
    }
  }

  > .credits {
    width: 35%;
    padding: 6px;

    .creditsElement {
      font-size: 14px;

      span {
        color: #777777;
      }

      a {
        cursor: pointer;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
`

export const RecommendationsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2% 5%;

  > h6 {
    font-size: 24px;
    line-height: 28.8px;
    margin: 0 0 22px;
  }

  > div.recommendationsContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    row-gap: 16px;
    row-gap: 16px;
  }
`

export const RecommendationElement = styled.div`
  display: flex;
  flex-direction: column;

  > div.recommendationImage {
    position: relative;
    height: 160px;
    background: url(${(props) => props.recommendationImage});
    background-position: center;
    background-size: 105%;
    border-radius: 4px;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(to top, transparent 0%, #1a1b1b 190%);
    }
  }
  > div.recommendationInfo {
    height: 250px;
    background: rgba(47, 47, 47);
    border-radius: 4px;
    padding: 3% 8%;
    overflow: hidden;

    > div.recommendationInfoTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      margin-bottom: 8px;

      > div.recommendationInfoTopLeft {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 8px 0;
        > p.rating {
          color: #46d369;
          font-weight: 500;
          margin: 0;
          margin-bottom: 8px;
        }

        > span.year {
          width: auto;
          padding: 3px 4px;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      }
      > div.divider {
        width: 2rem;
      }

      > button {
        padding: 12px;
        background: transparent;
        color: #fff;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        cursor: pointer;
        > svg {
          font-size: 14px;
        }
      }
    }

    > div.infoBottom {
      > p {
        margin: 0;
      }
      > p.title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 6px;
      }

      > p.overview {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
`

export const ComplexInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;

  > h1 {
    margin: 0;
  }
  > div {
    height: 32px;
    > p {
      > span {
        font-size: 14px;
        color: #777777;
      }
    }
  }
`
