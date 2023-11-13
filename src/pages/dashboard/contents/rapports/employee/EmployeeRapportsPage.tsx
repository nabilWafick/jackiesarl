import { FC, useEffect } from "react";
import "../../../../../assets/css/Sidebar.css";
import RapportFileUploadedCard from "../../../../../components/ui/dashboard/rapports/RapportFileUploadedCard";
import useReportSubmittingForm from "../../../../../hooks/forms/report_submitting/useReportSubmittingForm";
import JSInput from "../../../../../components/form/widgets/Input.widget";
import useReportsStore from "../../../../../store/rapports/useRapports.store";
import useAuthenticatedEmployeStore from "../../../../../store/authenticated_employe/useAuthenticatedEmploye.store";

const EmployeeRapportsPage: FC = () => {
  const {
    // formData,
    formErrors,
    onFileInputChange,
    //  isLoading,
    onFormSubmit,
  } = useReportSubmittingForm({
    report: "",
  });

  const fetchAllOfEmployeeReports = useReportsStore(
    (state) => state.fetchAllOfEmployeeReports
  );
  const authEmployeeReports = useReportsStore(
    (state) => state.authEmployeeReports
  );
  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  useEffect(() => {
    fetchAllOfEmployeeReports(authenticatedEmploye!.id!);
  }, [fetchAllOfEmployeeReports, authenticatedEmploye]);

  return (
    <div className="flex flex-col justify-center items-center flex-wrap mx-40 ">
      <p className="text-lg text-center font-medium my-7">Vos rapports</p>
      {authEmployeeReports.length == 0 ? (
        <div className="flex justify-center items-center text-tableTextColor text-xl font-medium">
          Aucun rapport soumis pour l'instant
        </div>
      ) : (
        <div className="flex min-h-min max-h-96 max-w-full justify-center items-center mb-7 p-2 border border-secondary flex-wrap sidebar overflow-x-hidden">
          {authEmployeeReports.map((authEmployeeReport) => (
            <RapportFileUploadedCard
              key={authEmployeeReport.id}
              rapport={authEmployeeReport}
            />
          ))}
        </div>
      )}

      <div className="my-8 flex flex-col justify-center items-center">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={onFormSubmit}
        >
          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onFileInputChange}
                name="report"
                id="report"
                type="file"
                placeholder="Rapport"
                autoComplete="report"
              />
            </div>
            {formErrors.report && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.report}
              </p>
            )}
          </div>
          <button className="mt-5 font-medium text-lg text-white bg-secondary py-2 px-5 shadow-md rounded-md hover:outline-none focus:outline-none">
            Uploader un rapport
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRapportsPage;
