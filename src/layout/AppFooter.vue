<template>
    <footer class="footer has-cards">
        <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <h1 class="display-3">
                        ¿Cómo llegar?
                    </h1>
                    <br/>
                    <div class="card card-lift--hover shadow border-0">
                        <div class="card-body p-3" >
                            <!--<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7848.672216138554!2d-75.515694!3d10.394857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625ed8b831a0f%3A0x5896a79f933f88a7!2sTv.%2049%20%2322%2C%20Cartagena%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1624797718283!5m2!1ses-419!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>-->
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.3793752400657!2d-75.4839062825562!3d10.391412799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef6256bec183dc9%3A0xd81f2596f6731ae4!2sComunidad%20jud%C3%ADa%20mesi%C3%A1nica%20Mz%208%20Lote%204!5e0!3m2!1ses-419!2sco!4v1624804965329!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <h1 class="display-3">
                        ¿Casos de éxito?
                    </h1>
                    <br/>
                    <div class="card card-lift--hover shadow border-0">
                        <div class="card-body p-3">
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/IaSIKN2ghx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Creative Tim</a> & <a href="https://www.binarcode.com" target="_blank" rel="noopener">Binar Code</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Creative Tim</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="http://blog.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                               class="nav-link" target="_blank" rel="noopener">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },

};
</script>
<style>
</style>
