import { Heading, majorScale, Pane } from 'evergreen-ui';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonLink from './ui/ButtonLink';
import SuspenseLoader from './ui/SuspenseLoader';
import withTheme from './ui/withTheme';

const Home = React.lazy(() => import('./pages/Home'));
const ExamplesHome = React.lazy(() => import('./pages/examples/Home'));
const ExampleBarChart = React.lazy(() => import('./pages/examples/BarChart'));
const ExampleCandlestickChart = React.lazy(() => import('./pages/examples/CandlestickChart'));
const ExampleChangeSeriesVisibility = React.lazy(() => import('./pages/examples/ChangeSeriesVisibility'));
const ExampleCustomFontFamily = React.lazy(() => import('./pages/examples/CustomFontFamily'));
const ExampleCustomLocale = React.lazy(() => import('./pages/examples/CustomLocale'));
const ExampleCustomPriceFormatter = React.lazy(() => import('./pages/examples/CustomPriceFormatter'));
const ExampleCustomThemes = React.lazy(() => import('./pages/examples/CustomThemes'));
const ExampleCustomWatermark = React.lazy(() => import('./pages/examples/CustomWatermark'));
const ExampleFitContent = React.lazy(() => import('./pages/examples/FitContent'));
const ExampleFloatingTooltip = React.lazy(() => import('./pages/examples/FloatingTooltip'));
const ExampleGoToRealtimeButton = React.lazy(() => import('./pages/examples/GoToRealtimeButton'));
const ExampleInfiniteHistory = React.lazy(() => import('./pages/examples/InfiniteHistory'));
const ExampleIntradayData = React.lazy(() => import('./pages/examples/IntradayData'));
const ExampleInvertedPriceScale = React.lazy(() => import('./pages/examples/InvertedPriceScale'));
const ExampleLegend = React.lazy(() => import('./pages/examples/Legend'));
const ExampleLogarithmicPriceScale = React.lazy(() => import('./pages/examples/LogarithmicPriceScale'));
const ExampleMagnifierTooltip = React.lazy(() => import('./pages/examples/MagnifierTooltip'));
const ExampleMovingAverage = React.lazy(() => import('./pages/examples/MovingAverage'));
const ExampleNoPriceScale = React.lazy(() => import('./pages/examples/NoPriceScale'));
const ExampleNoTimeScale = React.lazy(() => import('./pages/examples/NoTimeScale'));
const ExamplePercentagePriceScale = React.lazy(() => import('./pages/examples/PercentagePriceScale'));
const ExamplePriceLinesWithTitles = React.lazy(() => import('./pages/examples/PriceLinesWithTitles'));
const ExamplePriceScaleAtLeft = React.lazy(() => import('./pages/examples/PriceScaleAtLeft'));
const ExampleRangeSwitcher = React.lazy(() => import('./pages/examples/RangeSwitcher'));
const ExampleRealtimeEmulation = React.lazy(() => import('./pages/examples/RealtimeEmulation'));
const ExampleSeriesMarkers = React.lazy(() => import('./pages/examples/SeriesMarkers'));
const ExampleThreeLineLegend = React.lazy(() => import('./pages/examples/ThreeLineLegend'));
const ExampleTickMarksFormatter = React.lazy(() => import('./pages/examples/TickMarksFormatter'));
const ExampleTrackingTooltip = React.lazy(() => import('./pages/examples/TrackingTooltip'));
const ExampleTwoPriceScales = React.lazy(() => import('./pages/examples/TwoPriceScales'));
const ExampleVolumeStudy = React.lazy(() => import('./pages/examples/VolumeStudy'));
const ExampleWhitespaces = React.lazy(() => import('./pages/examples/Whitespaces'));

function App() {
  return (
    <BrowserRouter>
      <Pane display="flex" flexDirection="column" background="tint2" height="100vh">
        <Pane display="flex" elevation={1} paddingX={majorScale(4)} paddingY={majorScale(2)}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>Demo App</Heading>
          </Pane>
          <Pane>
            <ButtonLink to="/" marginX={majorScale(1)}>
              Home
            </ButtonLink>
            <ButtonLink to="examples">Examples</ButtonLink>
          </Pane>
        </Pane>
        <Pane display="flex" flexDirection="column" overflowY="auto">
          <Routes>
            <Route
              path="/"
              element={
                <SuspenseLoader>
                  <Home />
                </SuspenseLoader>
              }
            />
            <Route path="examples">
              <Route
                path=""
                element={
                  <SuspenseLoader>
                    <ExamplesHome />
                  </SuspenseLoader>
                }
              />
              <Route
                path="bar-chart"
                element={
                  <SuspenseLoader>
                    <ExampleBarChart />
                  </SuspenseLoader>
                }
              />
              <Route
                path="candlestick-chart"
                element={
                  <SuspenseLoader>
                    <ExampleCandlestickChart />
                  </SuspenseLoader>
                }
              />
              <Route
                path="change-series-visibility"
                element={
                  <SuspenseLoader>
                    <ExampleChangeSeriesVisibility />
                  </SuspenseLoader>
                }
              />
              <Route
                path="custom-font-family"
                element={
                  <SuspenseLoader>
                    <ExampleCustomFontFamily />
                  </SuspenseLoader>
                }
              />
              <Route
                path="custom-locale"
                element={
                  <SuspenseLoader>
                    <ExampleCustomLocale />
                  </SuspenseLoader>
                }
              />
              <Route
                path="custom-price-formatter"
                element={
                  <SuspenseLoader>
                    <ExampleCustomPriceFormatter />
                  </SuspenseLoader>
                }
              />
              <Route
                path="custom-themes"
                element={
                  <SuspenseLoader>
                    <ExampleCustomThemes />
                  </SuspenseLoader>
                }
              />
              <Route
                path="custom-watermark"
                element={
                  <SuspenseLoader>
                    <ExampleCustomWatermark />
                  </SuspenseLoader>
                }
              />
              <Route
                path="fit-content"
                element={
                  <SuspenseLoader>
                    <ExampleFitContent />
                  </SuspenseLoader>
                }
              />
              <Route
                path="floating-tooltip"
                element={
                  <SuspenseLoader>
                    <ExampleFloatingTooltip />
                  </SuspenseLoader>
                }
              />
              <Route
                path="go-to-realtime-button"
                element={
                  <SuspenseLoader>
                    <ExampleGoToRealtimeButton />
                  </SuspenseLoader>
                }
              />
              <Route
                path="infinite-history"
                element={
                  <SuspenseLoader>
                    <ExampleInfiniteHistory />
                  </SuspenseLoader>
                }
              />
              <Route
                path="intraday-data"
                element={
                  <SuspenseLoader>
                    <ExampleIntradayData />
                  </SuspenseLoader>
                }
              />
              <Route
                path="inverted-price-scale"
                element={
                  <SuspenseLoader>
                    <ExampleInvertedPriceScale />
                  </SuspenseLoader>
                }
              />
              <Route
                path="legend"
                element={
                  <SuspenseLoader>
                    <ExampleLegend />
                  </SuspenseLoader>
                }
              />
              <Route
                path="logarithmic-price-scale"
                element={
                  <SuspenseLoader>
                    <ExampleLogarithmicPriceScale />
                  </SuspenseLoader>
                }
              />
              <Route
                path="magnifier-tooltip"
                element={
                  <SuspenseLoader>
                    <ExampleMagnifierTooltip />
                  </SuspenseLoader>
                }
              />
              <Route
                path="moving-average"
                element={
                  <SuspenseLoader>
                    <ExampleMovingAverage />
                  </SuspenseLoader>
                }
              />
              <Route
                path="no-price-scale"
                element={
                  <SuspenseLoader>
                    <ExampleNoPriceScale />
                  </SuspenseLoader>
                }
              />
              <Route
                path="no-time-scale"
                element={
                  <SuspenseLoader>
                    <ExampleNoTimeScale />
                  </SuspenseLoader>
                }
              />
              <Route
                path="percentage-price-scale"
                element={
                  <SuspenseLoader>
                    <ExamplePercentagePriceScale />
                  </SuspenseLoader>
                }
              />
              <Route
                path="price-lines-with-titles"
                element={
                  <SuspenseLoader>
                    <ExamplePriceLinesWithTitles />
                  </SuspenseLoader>
                }
              />
              <Route
                path="price-scale-at-left"
                element={
                  <SuspenseLoader>
                    <ExamplePriceScaleAtLeft />
                  </SuspenseLoader>
                }
              />
              <Route
                path="range-switcher"
                element={
                  <SuspenseLoader>
                    <ExampleRangeSwitcher />
                  </SuspenseLoader>
                }
              />
              <Route
                path="realtime-emulation"
                element={
                  <SuspenseLoader>
                    <ExampleRealtimeEmulation />
                  </SuspenseLoader>
                }
              />
              <Route
                path="series-markers"
                element={
                  <SuspenseLoader>
                    <ExampleSeriesMarkers />
                  </SuspenseLoader>
                }
              />
              <Route
                path="three-line-legend"
                element={
                  <SuspenseLoader>
                    <ExampleThreeLineLegend />
                  </SuspenseLoader>
                }
              />
              <Route
                path="tick-marks-formatter"
                element={
                  <SuspenseLoader>
                    <ExampleTickMarksFormatter />
                  </SuspenseLoader>
                }
              />
              <Route
                path="tracking-tooltip"
                element={
                  <SuspenseLoader>
                    <ExampleTrackingTooltip />
                  </SuspenseLoader>
                }
              />
              <Route
                path="two-price-scales"
                element={
                  <SuspenseLoader>
                    <ExampleTwoPriceScales />
                  </SuspenseLoader>
                }
              />
              <Route
                path="volume-study"
                element={
                  <SuspenseLoader>
                    <ExampleVolumeStudy />
                  </SuspenseLoader>
                }
              />
              <Route
                path="whitespaces"
                element={
                  <SuspenseLoader>
                    <ExampleWhitespaces />
                  </SuspenseLoader>
                }
              />
            </Route>
          </Routes>
        </Pane>
      </Pane>
    </BrowserRouter>
  );
}

export default withTheme(App);
