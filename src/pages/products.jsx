import { useParams } from 'react-router'



export default function Products() {

  let { id } = useParams()

  console.log(">>> Products parameter_id:", id ?? "null")

  return (

    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Produtos</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">

          <div className="card card-default">
            <div className="card-header">
              <h3 className="card-title">Select2 (Default Theme)</h3>

              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Minimal</label>
                    <select className="form-control select2" style={{ width: "100%" }}>
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Disabled</label>
                    <select className="form-control select2" disabled="disabled" style={{ width: "100%" }}>
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>

                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Multiple</label>
                    <select className="select2" multiple="multiple" data-placeholder="Select a State" style={{ width: "100%" }}>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Disabled Result</label>
                    <select className="form-control select2" style={{ width: "100%" }}>
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option disabled="disabled">California (disabled)</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>

                </div>

              </div>


              <h5>Custom Color Variants</h5>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label>Minimal (.select2-danger)</label>
                    <select className="form-control select2 select2-danger" data-dropdown-css-className="select2-danger" style={{ width: "100%" }}>
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>

                </div>

                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label>Multiple (.select2-purple)</label>
                    <div className="select2-purple">
                      <select className="select2" multiple="multiple" data-placeholder="Select a State" data-dropdown-css-className="select2-purple" style={{ width: "100%" }}>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="card-footer">
              Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
              the plugin.
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}