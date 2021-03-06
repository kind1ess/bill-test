package top.kindless.billtest.model.entity;


import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "tb_user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    @Id
    @ApiModelProperty(hidden = true)
    private String id;

    private String account;

    private String password;

    private String telephone;

    private String address;

    @ApiModelProperty(hidden = true)
    private Integer creditScore;
}
