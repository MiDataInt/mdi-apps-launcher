---
title: "Server Modes"
has_children: false
nav_order: 10
---

## {{page.title}}

The MDI apps server can be launched on different computers
depending on your needs. In all cases, you access the apps 
via a web browser embedded in the launcher app.

<style>
    .entityBox {
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        vertical-align: top;
        font-size: 0.95em;
        margin: auto;
        width: fit-content;
        white-space: nowrap;
        color: #00274C;
    }
    .entityBox p {
        margin: 0;
    }
    .entityBoxLabel {
        font-weight: bold;
        margin-bottom: 5px !important;
    }
    .outerBox {
        margin: 20px;
    }
    .inlineBox {
        display: inline-block;
        margin: 0 5px;
    }
    .diagramArrow {
        font-size: 2em;
        display: inline-block;
    }
</style>

### Local Computer Mode 

**Local Computer** mode will use R to install the web server
on your desktop or laptop, so that the web browser and web
server run on the same local computer.

<div class="entityBox outerBox">
    <p class='entityBoxLabel'>Local Desktop or Laptop Computer</p>
    <div class="entityBox inlineBox">
        <p class='entityBoxLabel'>Web Browser</p>
    </div>
    <div class="diagramArrow">&harr;</div>
    <div class="entityBox inlineBox">
        <p class='entityBoxLabel'>Web Server</p>
    </div>
</div>

Local mode is responsive and secure, but you must manually transfer 
processed data files to your computer, or a provider needs to share
such files with you, e.g., via email.

### Remote Server Mode 

In **Remote Server** mode, the server runs on a 
remote computer on its login host, either a high performance computing (HPC) resource
or a server dedicated to running the MDI. 
The local computer connects to the server via a secure SSH
tunnel.

<div class="entityBox outerBox">
    <p class='entityBoxLabel'>Remote Server Configuration</p>
    <div class="entityBox inlineBox">
        <p class='entityBoxLabel'>Desktop or Laptop</p>
        <div class="entityBox inlineBox">
            <p class='entityBoxLabel'>Web Browser</p>
        </div>
    </div>
    <div class="inlineBox" style="text-align: center;">
        <div class="diagramArrow">&harr;</div>
        <div>SSH</div>
    </div>
    <div class="entityBox inlineBox">
        <p class='entityBoxLabel'>Remote Server</p>
        <div class="entityBox inlineBox">
            <p class='entityBoxLabel'>Web Server</p>
            <p>runs on login node</p>
        </div>
    </div>
</div>

In Remote Server mode, you can launch the Pipeline Runner app to
execute Stage 1 pipelines and then analyze their output using Stage 2 apps on the same server. It is best for users with an HPC solution that can be accessed via SSH, where the slightly more complex
installation is a good trade-off for the added capabilities afforded by running the MDI remotely.

### Cluster Node Mode 

**Cluster Node** mode is similar to Remote Server except that now
the web server runs on a worker node that is part of a remote server cluster using Slurm as its job scheduler. The server login node proxies web requests from the local computer to the cluster node, again using SSH.

<div class="entityBox outerBox">
    <p class='entityBoxLabel'>Remote Node Configuration</p>
    <div class="entityBox inlineBox">
        <p class='entityBoxLabel'>Desktop or Laptop</p>
        <div class="entityBox inlineBox">
            <p class='entityBoxLabel'>Web Browser</p>
        </div>
    </div>
    <div class="inlineBox" style="text-align: center;">
        <div class="diagramArrow">&harr;</div>
        <div>SSH</div>
    </div>
    <div class="entityBox inlineBox">
        <p class='entityBoxLabel'>Server Login Node</p>
        <div class="entityBox inlineBox">
            <p class='entityBoxLabel'>SSH proxy</p>
            <p>launch node job via Slurm</p>            
            <p>proxy to node via OpenSSH</p>
        </div>
    </div>
    <div class="inlineBox" style="text-align: center;">
        <div class="diagramArrow">&harr;</div>
        <div>SSH</div>
    </div>
    <div class="entityBox inlineBox">
        <p class='entityBoxLabel'>Cluster Node</p>
        <div class="entityBox inlineBox">
            <p class='entityBoxLabel'>Web Server</p>
            <p>performs computations</p>
        </div>
    </div>
</div>

Cluster Node Mode is best for users wishing to exploit the advantages of a remote
server whose configuration demands that computational processes run on a dedicated node 
accessed via an authorized user account, e.g., the University of Michigan Great Lakes 
server cluster.

<br><br><br>
