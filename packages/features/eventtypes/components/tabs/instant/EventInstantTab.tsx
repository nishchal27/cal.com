import type { EventTypeSetupProps } from "@calcom/features/eventtypes/lib/types";
import getPaymentAppData from "@calcom/lib/getPaymentAppData";

import InstantEventController from "./InstantEventController";

export const EventInstantTab = ({
  eventType,
  isTeamEvent,
}: Pick<EventTypeSetupProps, "eventType"> & { isTeamEvent: boolean }) => {
  const paymentAppData = getPaymentAppData(eventType);

  const requirePayment = paymentAppData.price > 0;

  return (
    <InstantEventController paymentEnabled={requirePayment} eventType={eventType} isTeamEvent={isTeamEvent} />
  );
};
