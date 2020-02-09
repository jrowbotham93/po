import React from 'react';
import TextTranslate from '../components/TextTranslator';

function Products() {
  return (
    <React.Fragment>
      <div className="container stackable centered">
        <section className="ui centered grid">
          <div className="row">
            <div className="sixteen wide tablet eight wide computer column">
              <h1 className="centered">
                <TextTranslate label={'productHeading'} />
              </h1>
              <p className="centered text-md">
                <TextTranslate label={'productText'} />
              </p>
            </div>
          </div>
          <div className="row margin-top-medium">
            <div className="sixteen wide tablet eight wide computer column">
              <h3>
                <TextTranslate label={'productTableHeading'} />
              </h3>
              <table class="ui unstackable table">
                <thead>
                  <tr>
                    <th>
                      <TextTranslate label={'tableHeadA'} />
                    </th>
                    <th>
                      <TextTranslate label={'tableHeadB'} />
                    </th>
                    <th>
                      <TextTranslate label={'tableHeadC'} />
                    </th>
                    <th>
                      <TextTranslate label={'tableHeadD'} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <TextTranslate label={'tableDataA'} />
                    </td>
                    <td>
                      <TextTranslate label={'tableDataH'} />
                    </td>
                    <td>
                      <TextTranslate label={'tableDataJ'} />
                    </td>
                    <td>
                      <TextTranslate label={'tableDataM'} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <TextTranslate label={'tableDataB'} />
                    </td>
                    <td>
                      <TextTranslate label={'tableDataI'} />
                    </td>
                    <td>
                      <TextTranslate label={'tableDataK'} />
                    </td>
                    <td>
                      <TextTranslate label={'tableDataN'} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <TextTranslate label={'tableDataC'} />
                    </td>
                    <td></td>
                    <td>
                      <TextTranslate label={'tableDataL'} />
                    </td>
                    <td>
                      <TextTranslate label={'tableDataO'} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <TextTranslate label={'tableDataD'} />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <TextTranslate label={'tableDataE'} />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <TextTranslate label={'tableDataF'} />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <TextTranslate label={'tableDataG'} />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Products;
