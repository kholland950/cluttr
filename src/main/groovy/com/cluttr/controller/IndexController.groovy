package com.cluttr.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 *
 */
@Controller
class IndexController {
    @RequestMapping("/")
    public String index() {
        return "index"
    }
}
