package com.cluttr.model

import lombok.Data

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

/**
 * Created by hollandk on 9/3/16.
 */
@Entity
@Data
class User {
    @Id
    int userId
//
//    @Column(name="username")
//    String username
}
