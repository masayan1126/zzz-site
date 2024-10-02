"use client";

import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

type Article = {
  _title: string;
  content: string;
};

export default function EnemyStrategyDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    (async () => {
      const myHeaders = new Headers();
      myHeaders.append(
        "X-NILTO-API-KEY",
        process.env.NEXT_PUBLIC_X_NILTO_API_KEY ?? ""
      );

      const response = await fetch(
        `https://cms-api.nilto.com/v1/contents/${id}`,
        {
          headers: myHeaders,
        }
      );
      const data = await response.json();
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
        <div style={{ background: "#ffffff", padding: "30px" }}>
          <h1>{article._title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      )}
    </div>
  );
}
