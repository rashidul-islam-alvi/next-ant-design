import { Card, Divider, Space } from "antd";
import React from "react";
import Header from "./header";
import { BackButton } from "./back-button";
import Social from "../social";
import SubHeader from "./sub-header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  subHeaderLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  subHeaderLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="md:w-[600px] w-[400px] justify-center">
      <Space direction="vertical" className="w-full" size={"middle"}>
        <div className="flex justify-center gap-3 flex-col items-center">
          <Header label={headerLabel} />
          <SubHeader label={subHeaderLabel} />
        </div>
        {showSocial && (
          <div>
            <Social />
          </div>
        )}

        <Divider orientation="center" style={{ color: "GrayText" }}>
          OR
        </Divider>
        <div> {children}</div>

        <div>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </div>
      </Space>
    </Card>
  );
};

export default CardWrapper;
