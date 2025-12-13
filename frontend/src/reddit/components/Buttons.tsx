"use client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify-icon/react";

export default function Buttons() {
  return (
    <div className="my-4">
      <div className="flex gap-4 items-center">
        <Button variant="primary" size="lg" style={{ fontSize: "1.2em" }}>
          <Icon icon="mdi:home-outline" size={1.3} />
          Large
        </Button>

        <Button variant="primary">
          <Icon icon="gravity-ui:envelope" />
          Medium
        </Button>
        <Button variant="primary" size="sm">
          <Icon icon="mdi:home-outline" size={1.3} />
          Small
        </Button>
      </div>
    </div>
  );
}
