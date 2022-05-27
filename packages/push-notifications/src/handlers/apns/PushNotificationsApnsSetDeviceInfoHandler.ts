import type { Handler, HandlerInboundMessage } from '@aries-framework/core/build/agent/Handler'

import { PushNotificationsApnsSetDeviceInfoMessage } from '../../messages'

/**
 * Handler for incoming push notification device info messages
 */
export class PushNotificationsApnsSetDeviceInfoHandler implements Handler {
  public supportedMessages = [PushNotificationsApnsSetDeviceInfoMessage]

  /**
  /* We don't really need to do anything with this at the moment
  /* The result can be hooked into through the generic message processed event
   */
  public async handle(inboundMessage: HandlerInboundMessage<PushNotificationsApnsSetDeviceInfoHandler>) {
    inboundMessage.assertReadyConnection()
  }
}
