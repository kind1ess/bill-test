package top.kindless.billtest.service;

import org.springframework.lang.NonNull;
import org.springframework.transaction.annotation.Transactional;
import top.kindless.billtest.model.entity.BillPurchase;
import top.kindless.billtest.model.entity.DetailPurchase;
import top.kindless.billtest.model.params.BillParams;
import top.kindless.billtest.model.params.PurchaseParams;
import top.kindless.billtest.model.vo.CommonBillPreviewVo;
import top.kindless.billtest.model.vo.PurchaseVo;
import top.kindless.billtest.service.common.BillService;

import java.util.List;

public interface PurchaseService extends BillService<BillPurchase, DetailPurchase> {

    /**
     * 保存采购单表头
     * @param billPurchase
     */
    @Transactional
    void saveBillPurchase(@NonNull BillPurchase billPurchase);

    /**
     * 更新采购单表头
     * @param billPurchase
     * @return
     */
    @Transactional
    BillPurchase updateBillPurchase(@NonNull BillPurchase billPurchase);

    /**
     * 根据id删除采购单表头
     * @param id
     */
    @Transactional
    void deleteBillPurchaseById(@NonNull String id);

    /**
     * 查询所有采购单id
     * @return 所有采购单id
     */
    List<String> findAllId();

    /**
     * 根据id查询所有
     * @param ids id集合
     * @return List<BillPurchase>
     */
    List<BillPurchase> findAll(@NonNull List<String> ids);

    @Transactional
    @NonNull
    String generatePurchase(@NonNull BillParams billParams);

    @Transactional
    @NonNull
    String generatePurchase(@NonNull PurchaseParams purchaseParams);

    PurchaseVo findPurchaseVoById(@NonNull String id);

    CommonBillPreviewVo findAllPurchasePreview();

    CommonBillPreviewVo findAllPurchasePreview(@NonNull Integer page,@NonNull Integer size);

    CommonBillPreviewVo findAllPurchasePreview(@NonNull Integer statusId);

    CommonBillPreviewVo findAllPurchasePreview(@NonNull Integer statusId,@NonNull Integer page ,@NonNull Integer size);

    Long getCount();

    Long getCount(Integer statusId);
}
