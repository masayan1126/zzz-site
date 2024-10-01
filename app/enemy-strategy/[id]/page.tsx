"use client";

import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Grid2,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import SelectBox from "@/shared/components/SelectBox";
import InfoIcon from "@mui/icons-material/Info";
import { DinnyCalculator } from "@/features/agent-traning-calculator/dinny-calculator";
import { AgentBreakThroughMaterialAmountCalculator } from "@/features/agent-traning-calculator/agent-breack-through-material-amount-calculator";
import useAgentLevel from "@/features/agent-traning-calculator/hooks/useAgentLevel";
import useAgentCoreSkillLevel from "@/features/agent-traning-calculator/hooks/useAgentCoreSkillLevel";
import useBreakThrough from "@/features/agent-traning-calculator/hooks/useBreakThrough";
import SkillLevelChoiceSection from "@/features/agent-traning-calculator/components/SkillLevelChoiceSection";
import DinnyResultSection from "@/features/agent-traning-calculator/components/DinnyResultSection";
import AgentExperiencePointAmountResultSection from "@/features/agent-traning-calculator/components/AgentExperiencePointAmountResultSection";
import AgentBreakThroughMaterialAmountResultSection from "@/features/agent-traning-calculator/components/AgentBreakThroughMaterialAmountResultSection";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import { calcNeedBatteryByDinny } from "@/features/shared/battery-calculator";
import useBattery from "@/features/shared/hooks/useBattery";
import TabMenu from "@/shared/components/TabMenu";
import ItemsList from "@/shared/components/ItemsList";

export default function EnemyStrategyDetail({
  params,
}: {
  params: { id: string };
}) {
  //   const [articles, setArticles] = useState<[]>([]);
  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch(
  //         "https://cms-api.nilto.com/v1/contents/?model=enemy_strategy_article",
  //         {
  //           headers: {
  //             "X-NILTO-API-KEY": process.env.NEXT_PUBLIC_X_NILTO_API_KEY,
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       console.log(data.data);
  //       setArticles(data.data);
  //     })();
  //   }, []);

  const { id } = params;

  const [article, setArticle] = useState(undefined);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://cms-api.nilto.com/v1/contents/${id}`,
        {
          headers: {
            "X-NILTO-API-KEY": process.env.NEXT_PUBLIC_X_NILTO_API_KEY,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setArticle(data);
    })();
  }, [id]);

  return (
    <div
      style={{
        padding: "40px 30px",
      }}
    >
      {article && (
        <div>
          <h2>{article._title}</h2>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      )}
    </div>
  );
}
