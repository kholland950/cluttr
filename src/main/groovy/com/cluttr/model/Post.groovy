package com.cluttr.model

import lombok.Data

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.OneToMany

/**
 * Created by hollandk on 9/3/16.
 */
@Entity
@Data
class Post {
    @Id
    int postId

//    @Column(name="content")
//    String content
//
//    @Column(name="user")
//    int userId

//    @OneToMany
//    Set Comments

}
