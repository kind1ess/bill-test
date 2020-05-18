package top.kindless.billtest.model.entity;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity(name = "bill_purchase")
public class BillPurchase {

    @Id
    private String id;

    @CreatedDate
    private Date createTime;

    @LastModifiedDate
    private Date updateTime;

    private String staffId;

    private Integer statusId;
}
