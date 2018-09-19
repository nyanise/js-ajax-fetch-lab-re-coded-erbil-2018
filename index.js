
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript fetch() Lab</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>
    <style>
      .flexbox-container {
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
      }
      .flexbox-container > div {
        width: 50%;
        padding: 10px;
      }
      .flexbox-container > div:first-child {
        margin-right: 20px;
      }
    </style>
  </head>
  <body>
    <main id="main">
      <div id="errors"></div>
    </main>
    <div class="flexbox-container">
      <div>
        <h3>Create Fork</h3>
        <p><a href="#" onclick="forkRepo()">Fork Repository</a></p>
        <div id="results"></div>
      </div>
      <div>
        <h3>Issues</h3>
        <div>
          Issue Title: <input type="text" id="title"><br>
          Issue Text: <input type="text" id="body"><br>
          <a href="#" id="search" onclick="createIssue()">Create Issue</a>
        </div>
        <div id="issues"></div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>