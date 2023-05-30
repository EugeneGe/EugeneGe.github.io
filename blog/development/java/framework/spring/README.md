---
sort: 1
---
# Spring Framework

Spring是一个轻量级的开发框架，用于构建Java企业级应用程序。它提供了一个全面的编程和配置模型，用于开发各种类型的应用，包括Web应用、RESTful服务、批处理应用、消息传递应用等。

它提供的一系列底层容器和基础设施，并可以和大量常用的开源框架无缝集成，可以说是开发Java EE应用程序的必备。

## 介绍
Spring最早是由Rod Johnson这哥们在他的《Expert One-on-One J2EE Development without EJB》一书中提出的用来取代EJB的轻量级框架。随后这哥们又开始专心开发这个基础框架，并起名为Spring Framework。

随着Spring越来越受欢迎，在Spring Framework基础上，又诞生了Spring Boot、Spring Cloud、Spring Data、Spring Security等一系列基于Spring Framework的项目。本章我们只介绍Spring Framework，即最核心的Spring框架。后续章节我们还会涉及Spring Boot、Spring Cloud等其他框架。

### (一). 主要特点

**IOC（Inverse of Control，控制反转）容器：**Spring的核心是IOC容器，它负责管理和组织应用程序中的对象及其依赖关系。通过IOC容器，开发者可以将对象的创建、依赖注入、生命周期管理等交给Spring框架处理，实现松耦合和可维护的应用。

**AOP（Aspect Oriented Programming，面向切面编程）支持：**Spring提供了AOP机制，用于将横切关注点（如日志、事务管理、安全性等）与业务逻辑分离。通过定义切面和切点，可以在运行时动态地将切面织入到应用程序中。

**声明式事务管理：**Spring框架提供了声明式事务管理的支持，通过简单的配置即可管理事务，无需显式编写大量的事务管理代码。可以使用注解或XML进行事务配置，同时支持多种事务管理器。

**MVC（Model-View-Controller）框架：**Spring MVC是Spring框架的一个模块，用于开发Web应用程序。它采用经典的MVC设计模式，将应用程序分为模型（Model）、视图（View）和控制器（Controller）三个组件，提供了灵活的请求处理和视图渲染机制。

**集成支持：**Spring提供了丰富的集成支持，可以与各种第三方库和框架进行无缝集成，如Hibernate、MyBatis、JPA、JMS、RESTful服务等。这使得开发者可以利用Spring的功能和特性，与其他技术组件进行整合。

**安全性：**Spring框架提供了多种安全性功能和扩展点，用于保护应用程序的数据和资源。它支持基于角色的访问控制、身份验证和授权，同时提供了集成常见安全框架（如Spring Security）的能力。

**测试支持：**Spring框架提供了丰富的测试支持，包括单元测试和集成测试。它提供了各种测试工具和模拟对象，用于编写可靠的自动化测试，帮助开发者确保应用程序的质量和稳定性。

Spring框架简化了企业级Java应用程序的开发，提供了一种灵活、可扩展和可维护的编程模型。它的模块化设计和丰富的功能使得开发者能够更加专注于业务逻辑的实现，提高开发效率和代码质量。

### (二). 包含模块
Spring Framework主要包括几个模块：

	支持IoC和AOP的容器；
	支持JDBC和ORM的数据访问模块；
	支持声明式事务的模块；
	支持基于Servlet的MVC开发；
	支持基于Reactive的Web开发；
	以及集成JMS、JavaMail、JMX、缓存等其他模块。

## 文章目录

{% include list.liquid all=true %}
