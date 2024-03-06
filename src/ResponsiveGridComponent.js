import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "Application 1", x: 0, y: 0, w: 1, h: 1 },
  { i: "Application 2", x: 1, y: 0, w: 1, h: 1 },
  { i: "Application 3", x: 2, y: 0, w: 1, h: 1 },
  { i: "Application 4", x: 3, y: 0, w: 1, h: 1 },
  { i: "Application 5", x: 4, y: 0, w: 1, h: 1 }
];

const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

const getLayouts = () => {
  const savedLayouts = localStorage.getItem("grid-layout");

  return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

const Grid = () => {
  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
};
  return (
    <Root>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={300}
        width={1000}
        onLayoutChange={handleLayoutChange}
      >
        <GridItemWrapper key="Application 1">
          <GridItemContent>Application 1</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="Application 2">
          <GridItemContent>Application 2</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="Application 3">
          <GridItemContent>Application 3</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="Application 4">
          <GridItemContent>Application 4</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="Application 5">
          <GridItemContent>Application 5</GridItemContent>
        </GridItemWrapper>
      </ResponsiveGridLayout>
    </Root>
  );
};
export default Grid;