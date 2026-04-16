import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const pagesData = [
  {
    name: "The Great Gatsby",
    shortName: "The Great Gatsby",
    pages: 192,
    fill: "#3B82F6",
    glow: "rgba(59,130,246,0.22)",
  },
  {
    name: "To Kill a Mockingbird",
    shortName: "To kill a mocking bird",
    pages: 281,
    fill: "#56CFAE",
    glow: "rgba(86,207,174,0.22)",
  },
  {
    name: "1984",
    shortName: "1984",
    pages: 328,
    fill: "#F5BE3E",
    glow: "rgba(245,190,62,0.24)",
  },
  {
    name: "The Alchemist",
    shortName: "The Alchemist",
    pages: 177,
    fill: "#F48A49",
    glow: "rgba(244,138,73,0.22)",
  },
  {
    name: "Pride and Prejudice",
    shortName: "Pride and prejudice",
    pages: 279,
    fill: "#F33324",
    glow: "rgba(243,51,36,0.22)",
  },
];

const PageConeBar = (props) => {
  const { x = 0, y = 0, width = 0, height = 0, fill = "#23BE0A" } = props || {};
  const bottomY = y + height;
  const centerX = x + width / 2;

  return (
    <>
      <ellipse
        cx={centerX}
        cy={bottomY + 2}
        rx={width * 0.24}
        ry={7}
        fill="rgba(17, 24, 39, 0.05)"
      />
      <path
        d={`
          M ${x} ${bottomY}
          C ${x + width * 0.14} ${bottomY}, ${centerX - width * 0.15} ${y + height * 0.3}, ${centerX} ${y}
          C ${centerX + width * 0.15} ${y + height * 0.3}, ${x + width * 0.86} ${bottomY}, ${x + width} ${bottomY}
          Z
        `}
        fill={fill}
      />
    </>
  );
};

const ValueLabel = ({ x = 0, y = 0, width = 0, value = "", fill = "#131313" }) => (
  <text
    x={x + width / 2}
    y={y - 14}
    textAnchor="middle"
    fill={fill}
    fontSize="17"
    fontWeight="800"
  >
    {value}
  </text>
);

const CustomXAxisTick = ({ x, y, payload }) => (
  <text
    x={x}
    y={y + 16}
    textAnchor="middle"
    fill="#9A9A9A"
    fontSize="12"
    fontWeight="500"
  >
    {payload.value}
  </text>
);

const PagesToRead = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-0 py-8 md:py-10">
      <div className="rounded-[34px] border border-white/80 bg-[linear-gradient(180deg,#FBFBFB_0%,#F6F6F6_100%)] px-3 py-5 sm:px-6 sm:py-8 md:px-10 md:py-10 shadow-[0_30px_80px_rgba(15,23,42,0.06)]">
        <div className="rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(249,249,249,0.96)_42%,_rgba(245,245,245,0.98)_100%)] px-1 sm:px-3 md:px-4">
          <div className="h-[360px] sm:h-[430px] md:h-[520px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={pagesData}
              margin={{ top: 46, right: 26, left: 12, bottom: 34 }}
              barCategoryGap="14%"
            >
              <defs>
                {pagesData.map((item) => (
                  <linearGradient
                    key={`${item.name}-gradient`}
                    id={`barGradient-${item.name.replace(/\s+/g, "-")}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={item.fill} />
                    <stop offset="100%" stopColor={item.fill} stopOpacity="0.92" />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid stroke="#E9E9E9" strokeDasharray="4 5" vertical={true} />
              <XAxis
                dataKey="shortName"
                tickLine={false}
                axisLine={{ stroke: "#E4E4E4", strokeWidth: 1 }}
                interval={0}
                height={64}
                tick={<CustomXAxisTick />}
              />
              <YAxis
                ticks={[0, 85, 170, 255, 340]}
                domain={[0, 340]}
                tickLine={false}
                axisLine={{ stroke: "#E4E4E4", strokeWidth: 1 }}
                tick={{ fill: "#9A9A9A", fontSize: 12 }}
                tickFormatter={(value) => (value === 0 ? "00" : value)}
                width={52}
              >
                <Label
                  value=""
                  position="insideLeft"
                />
              </YAxis>
              <Bar
                dataKey="pages"
                shape={<PageConeBar />}
                isAnimationActive={false}
                maxBarSize={88}
              >
                <LabelList
                  dataKey="pages"
                  content={(props) => (
                    <ValueLabel
                      {...props}
                      fill={props?.payload?.fill || "#131313"}
                    />
                  )}
                />
                {pagesData.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={`url(#barGradient-${entry.name.replace(/\s+/g, "-")})`}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PagesToRead;
