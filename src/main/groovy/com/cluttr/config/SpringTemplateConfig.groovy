package com.cluttr.config

import nz.net.ultraq.thymeleaf.LayoutDialect
import org.springframework.context.annotation.Bean
import org.thymeleaf.spring4.SpringTemplateEngine

/**
 * Spring template config bean
 */
class SpringTemplateConfig {
    @Bean
    public SpringTemplateEngine templateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.addDialect(new LayoutDialect());
        return templateEngine;
    }
}
