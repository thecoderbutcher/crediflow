'use client';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { Installments } from '@prisma/client';
import { useInstallmentStore } from '../store/installmentsStore';
import ConfirmModal from '../../components/ConfirmModal';
import { useState } from 'react';
import { payInstallment } from '../action/installments';
const ListInstallments = ({
  installments,
}: {
  installments: Installments[];
}) => {
  const [installmentToPay, setInstallmentToPay] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { activeStatuses } = useInstallmentStore();

  const filteredInstallments = installments.filter(installment =>
    activeStatuses.includes(installment.statusId)
  );

  const handlePayment = (installmentId: number) => {
    setInstallmentToPay(installmentId);
    setShowModal(true);
  };

  const confirmPayment = async () => {
    setShowModal(false);
    await payInstallment(installmentToPay);
  };

  const cancelPayment = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col gap-2 pb-4 px-2">
      {filteredInstallments.map((installment, index) => (
        <div
          key={index}
          className={`flex justify-between items-center bg-darkText py-2 px-4 rounded-lg shadow-md border-l-4 ${installment.statusId == 1 ? 'border-l-warning' : installment.statusId == 2 ? 'border-l-success' : 'border-l-danger'}`}
        >
          <div className="flex w-full pr-4 items-center justify-between">
            <div className="flex flex-col">
              <p className="font-light text-sm">Saldo a pagar</p>
              <p>${installment.value}</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-light text-xs">
                {installment.statusId !== 2
                  ? 'Fecha a vencer'
                  : 'Fecha de pago'}
              </p>
              <p className="text-xs">
                {installment.statusId !== 2
                  ? installment.expirationDate.toLocaleDateString('es-AR')
                  : installment.paidDate
                    ? installment.paidDate.toLocaleDateString('es-AR')
                    : 'Sin fecha'}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            {installment.statusId !== 2 ? (
              <MdCheckBoxOutlineBlank
                className="text-2xl"
                onClick={() => handlePayment(installment.id)}
              />

            ): (
              <MdCheckBox className="text-2xl text-success" />
            )}
          </div>
        </div>
      ))}
      {showModal && (
        <ConfirmModal
          title="Confirmar Pago"
          message="¿Desea confirmar el pago de la cuota?"
          onConfirm={confirmPayment}
          onCancel={cancelPayment}
        />
      )}
    </div>
  );
};

export default ListInstallments;
