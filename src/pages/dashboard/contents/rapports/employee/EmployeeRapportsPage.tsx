import { FC, useEffect } from "react";
import "../../../../../assets/css/Sidebar.css";
import RapportFileUploadedCard from "../../../../../components/ui/dashboard/rapports/RapportFileUploadedCard";
import useReportSubmittingForm from "../../../../../hooks/forms/report_submitting/useReportSubmittingForm";
import JSInput from "../../../../../components/form/widgets/Input.widget";
import useReportsStore from "../../../../../store/rapports/useRapports.store";

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

  useEffect(() => {
    fetchAllOfEmployeeReports();
  }, [fetchAllOfEmployeeReports]);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center flex-wrap mx-auto">
      <p className=" text-center font-medium my-7 text-[16px] sm:text-[17px] md:text-[19px] lg:text-[21px]">
        Vos rapports
      </p>
      {authEmployeeReports.length == 0 ? (
        <div className="flex h-max w-max justify-center items-center text-tableTextColor  font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
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
          <button className="mt-5 font-medium  text-white bg-secondary py-2 px-5 shadow-md rounded-md hover:outline-none focus:outline-none text-[16px] sm:text-[17px] md:text-[19px] lg:text-[21px]">
            Uploader un rapport
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRapportsPage;
