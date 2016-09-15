package com.cluttr.model

import lombok.Data

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.ManyToOne

/**
 * Created by hollandk on 9/3/16.
 */
@Entity
@Data
class Like {
    @Id
    int id

//    @Column(name="user")
//    User user
//
//    @ManyToOne
//    Post post
}
