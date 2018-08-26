# Container-technology

<small class="fragment">Virtualization of system resources, not hardware virtualization</small>
<small class="fragment">Operating-system-level virtualization</small>

---

# OS Virtualization

<div style="position: relative">
<div class="fragment current-visible" style="position: absolute" data-fragment-index="1">
<small>Memory virtualization</small>
<img src="containerized-1.png"  style="border: 0"/>
</div>

<div class="fragment current-visible" style="position: absolute" data-fragment-index="2">
<small>Memory virtualization</small>
<img src="containerized-2.png"  style="border: 0"/>
</div>
</div>

<div class="fragment current-visible" style="position: absolute" data-fragment-index="3">
<small>Other physical resources are shared</small>
<img src="containerized-3.png"  style="border: 0"/>
</div>

<div class="fragment current-visible" style="position: absolute" data-fragment-index="4">
<small>Containers virtualize fs and network</small>
<img src="containerized-4.png"  style="border: 0"/>
</div>

<div class="fragment" style="position: absolute" data-fragment-index="5">
<small>Processes in containers are still <em>native OS processes</em></small>
<img src="containerized-5.png"  style="border: 0"/>
</div>
</div>

Note:

Container technology exists in Linux and Windows

1960s mainframe virtual memory

- the Atlas Supervisor for the Atlas
- THE multiprogramming system for the Electrologica X8 (software based virtual memory without hardware support)
- MCP for the Burroughs B5000
- MTS, TSS/360 and CP/CMS for the IBM System/360 Model 67
- Multics for the GE 645
- the Time Sharing Operating System for the RCA Spectra 70/46

---

# Docker

* Wraps container technology in an easy to use package.  <!-- .element: class="fragment" -->
* Originally for Linux (Mac and Windows runs a virtualized Linux) <!-- .element: class="fragment" -->
* Now also supports native Windows containers <!-- .element: class="fragment" -->

Note:


