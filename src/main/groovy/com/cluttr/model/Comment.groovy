package com.cluttr.model

import lombok.Data

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.ManyToOne
import javax.persistence.OneToOne

/**
 * Created by hollandk on 9/3/16.
 */
@Entity
@Data
class Comment {
    @Id
    int commentId

//    @Column(name="content")
//    String content
//
//    @Column(name="user")
//    int userId

//    @ManyToOne
//    Post post
}
