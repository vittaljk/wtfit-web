import * as Templates from "@/components/Templates";

function RefundPolicy() {
  return (
    <Templates.Layout>
      <div className="mx-5 md:container md:mx-auto  md:px-4">
        <div className="bg-gray-50 min-h-screen py-12 px-6">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">
              Refund Policy & Billing
            </h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Refund Policy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              All Sales are final and NON-REFUNDABLE. The fees associated with
              your purchase will apprear on your bank statement through the
              identifier "WTFit". All prices displayed on the Site are quoted in
              Indian Rupees, are payable in INR and are valid and effective only
              in India. Failure to use the training does not constitute a basis
              for refusing to pay any of the associates.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Shipping and Delivery:
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              As this is a site created for Fitness training / Workshops, there
              are no items to be Shipped / Delivered. Hence the policy of
              Shipping and Delivery does not apply for our Business model.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Address and Phone number:
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              Bengaluru Karnataka India, 560085, Ph: 7022366007
            </p>
          </div>
        </div>
      </div>
    </Templates.Layout>
  );
}

export default RefundPolicy;
