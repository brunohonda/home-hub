import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { LineChart } from "@mui/x-charts";

const ResourceConsumptionCard = () => {
  const energyData = [70, 75, 80, 85, 90, 95, 100];
  const gasData = [55, 5, 25, 55, 45, 15, 45];
  const waterData = [83, 76, 69, 62, 55, 48, 42];

  const xSample = [0, 20, 40, 60, 80, 90, 200];
  const ySample = [0, 20, 40, 60, 80, 90, 100];

  const series = [
    { yAxisId: "energyAxis", data: energyData, label: "Luz" },
    { yAxisId: "gasAxis", data: gasData, label: "Gás" },
    { yAxisId: "waterAxis", data: waterData, label: "Água" },
  ];

  return (
    <Card sx={{ background: "#F5F5F5" }}>
      <CardContent>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography color="#E65100">Consumo de Recursos</Typography>
          <LineChart
            xAxis={[{ scaleType:"point", data: xSample, min: 0, max: 200 }]}
            yAxis={[
              { id: "energyAxis", data: ySample, min: 0, max: 100 },
              { id: "gasAxis", data: ySample, min: 0, max: 100 },
              { id: "waterAxis", data: ySample, min: 0, max: 100 },
            ]}
            series={ series }
            leftAxis="energyAxis"
            height={ 300 }
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResourceConsumptionCard;
