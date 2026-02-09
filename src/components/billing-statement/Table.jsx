import React, { useEffect, useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import NotifyModal from "./NotifyModal";
import AddBillingModal from "./AddBillingModal";
import api from "../../assets/api";
import PaymentStatusModal from "./PaymentStatusModal";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkModal from "./MarkModal";
function Table() {
  const [open, setOpen] = useState(false);
  const [billings, setBillings] = useState([]);
  const [selectedBilling, setSelectedBilling] = useState(null);
  const [statusFilter, setStatusFilter] = useState("Pending");
  const [search, setSearch] = useState("");

  const filteredBillings = billings
    .filter((bill) => {
      if (!search) return true;

      const text = `
  ${bill.student.full_name}
  ${bill.student.grade}
  Grade ${bill.student.grade}
  ${bill.payment_status}
  ${bill.tuition_fee}
  ${bill.miscellaneous_fee}
  ${bill.penalties}
  ${bill.discounts}
  ${bill.total_amount}
`.toLowerCase();

      return text.includes(search.toLowerCase());
    })
    .filter((bill) =>
      statusFilter
        ? statusFilter === "Paid"
          ? bill.payment_status === "Paid"
          : bill.payment_status !== "Paid"
        : true,
    );

  const handleOpenNotify = (bill) => {
    setSelectedBilling(bill);
    setOpen(true);
  };
  useEffect(() => {
    api
      .get("/api/billings/")
      .then((res) => setBillings(res.data))
      .catch(() => {});
  }, []);

  const fetchBillings = () => {
    api.get("/api/billings/").then((res) => setBillings(res.data));
  };

  useEffect(() => {
    fetchBillings();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete billing?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/api/billing/delete/${id}/`).then(() => {
          Swal.fire("Deleted", "Billing has been deleted", "success");
          fetchBillings();
        });
      }
    });
  };

  return (
    <>
      <NotifyModal
        open={open}
        onClose={() => setOpen(false)}
        billingId={selectedBilling?.id}
        studName={selectedBilling?.student.full_name}
      />

      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center mb-6">
          <div class="w-full mb-4 md:mb-0 flex flex-row items-center justify-between">
            <input
              type="text"
              placeholder="Search students..."
              class="w-1/3 px-4 py-2 rounded-md border border-gray-300 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <AddBillingModal onSuccess={fetchBillings} />
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() =>
              setStatusFilter(statusFilter === "Paid" ? null : "Paid")
            }
            className={`px-4 cursor-pointer py-2 rounded-md text-sm font-medium transition
      ${
        statusFilter === "Paid"
          ? "bg-green-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
          >
            Paid
          </button>

          <button
            onClick={() =>
              setStatusFilter(statusFilter === "Pending" ? null : "Pending")
            }
            className={`px-4 cursor-pointer py-2 rounded-md text-sm font-medium transition
      ${
        statusFilter === "Pending"
          ? "bg-green-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
          >
            Pending
          </button>
        </div>

        <div class="overflow-x-auto bg-white rounded-lg shadow">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-center w-32">Grade</th>
                <th class="py-3 px-6 text-center w-44">Name</th>
                <th class="py-3 px-6 text-center">Payment Status</th>
                <th class="py-3 px-6 text-center">Tuition Fee</th>
                <th class="py-3 px-6 text-center">Miscellaneous</th>
                <th class="py-3 px-6 text-center">Penalties</th>
                <th class="py-3 px-6 text-center">Discount</th>
                <th class="py-3 px-6 text-center">Total Amount</th>
                <th class="py-3 px-6 text-center w-54">Actions</th>
              </tr>
            </thead>

            <tbody class="text-gray-600 text-sm">
              {filteredBillings.map((bill) => (
                <tr
                  key={bill.id}
                  class="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td class="py-3 text-center">
                    Grade {String(bill.student.grade)}
                  </td>
                  <td class="py-3 text-center">{bill.student.full_name} </td>
                  <td class="py-3 text-center font-bold flex flex-row items-center justify-center gap-1 mt-1">
                    <PaymentStatusModal
                      status={bill.payment_status}
                      datePaid={bill.date_paid}
                      dateBilled={bill.date_billed}
                    />
                    {bill.payment_status === "Paid" ? (
                      <span class="text-green-600">Paid</span>
                    ) : (
                      <span class="text-yellow-600">{bill.payment_status}</span>
                    )}
                  </td>
                  <td class="py-3 text-center">₱{bill.tuition_fee}</td>
                  <td class="py-3 text-center">₱{bill.miscellaneous_fee}</td>
                  <td class="py-3 text-center text-red-600">
                    + ₱{bill.penalties}
                  </td>
                  <td class="py-3 text-center text-green-600">
                    - ₱{bill.discounts}
                  </td>
                  <td class="py-3 text-center font-bold">
                    ₱{bill.total_amount}
                  </td>

                  <td class="py-3 px-6 flex flex-row gap-4 text-center">
                    <div class="flex justify-center gap-6 hover:scale-110  duration-300">
                      <button
                        onClick={() => handleOpenNotify(bill)}
                        className="flex flex-col items-center hover:text-green-500 cursor-pointer"
                      >
                        <NotificationsActiveIcon sx={{ fontSize: 16 }} />
                        <p className="text-xs">Notify</p>
                      </button>
                    </div>

                    <MarkModal id={bill.id} studName={bill.student.full_name} />

                    <div class="flex justify-center gap-6 hover:scale-110 duration-300">
                      <button
                        onClick={() => handleDelete(bill.id)}
                        class="flex flex-col items-center hover:text-red-500 cursor-pointer"
                      >
                        <DeleteIcon sx={{ fontSize: 16 }} />
                        <p className="text-xs">Delete</p>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="flex justify-between items-center mt-6">
          <span class="text-sm text-gray-700">
            Total of {billings.length} data
          </span>
        </div>
      </div>
    </>
  );
}

export default Table;
