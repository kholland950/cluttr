package com.cluttr.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 * Created by hollandk on 9/21/16.
 */
@Controller
class MessagesController {
    @RequestMapping("/messages")
    public String messages() {
        return "messages"
    }
}
