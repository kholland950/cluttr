package com.cluttr.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 *
 */
@Controller
class MeController {
    @RequestMapping("/me")
    public String me() {
        return "me"
    }
}
